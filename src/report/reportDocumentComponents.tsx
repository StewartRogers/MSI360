import { Image, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { reportAssets } from "./reportAssets";
import { priorityCountBoxStyle, priorityCountTextStyle, styles } from "./reportDocumentStyles";
import type { ReportBodySymptomArea, ReportBodySymptoms, ReviewPriority } from "./reportData";

/**
 * Reusable presentational pieces for `ReportDocument`.
 *
 * Keeping these small components outside the main document file lets the page
 * sections read like report content instead of low-level PDF layout plumbing.
 */

/**
 * Small icon/label/value item used in the introductory metadata grid.
 */
export function MetaItem({
  icon,
  label,
  value,
  iconSize = "normal",
  iconFit = "fill",
  centerIcon = false
}: {
  icon: string;
  label: string;
  value: string;
  iconSize?: "normal" | "large";
  iconFit?: "fill" | "contain";
  centerIcon?: boolean;
}) {
  const iconStyle = iconFit === "contain" ? styles.metaIconContain : iconSize === "large" ? styles.metaIconLarge : styles.metaIcon;
  return (
    <View style={styles.metaItem}>
      {centerIcon ? (
        <View style={styles.metaIconSlot}>
          <Image src={icon} style={iconStyle} />
        </View>
      ) : (
        <Image src={icon} style={iconStyle} />
      )}
      <View style={styles.metaTextCol}>
        <Text style={styles.metaLabel}>{label}: <Text style={styles.metaValue}>{value}</Text></Text>
      </View>
    </View>
  );
}

/**
 * Numbered section wrapper used by the intro page.
 */
export function NumberedSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <View style={styles.numberedSection} wrap={false}>
      <View style={styles.sectionTitleRow}>
        <View style={styles.numberBadge}>
          <Text style={styles.numberText}>{number}</Text>
        </View>
        <Text style={styles.numberedTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

/**
 * Audience card used in the "Who should use this report?" section.
 */
export function AudienceCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <View style={styles.audienceCard}>
      <Image src={icon} style={styles.audienceIcon} />
      <View style={styles.audienceText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.smallText}>{text}</Text>
      </View>
    </View>
  );
}

/**
 * Prominent symptom status alert shown on the overview page.
 */
export function SymptomsAlert({ symptoms }: { symptoms: ReportBodySymptoms }) {
  return (
    <View style={[styles.symptomAlert, symptoms.reported ? styles.symptomAlertWarn : styles.symptomAlertClear]} wrap={false}>
      <Image src={symptoms.reported ? reportAssets.icons.alert : reportAssets.icons.shield} style={styles.alertIcon} />
      <Text style={styles.symptomAlertText}>
        {symptoms.reported ? "Important: The worker reported work-related pain or discomfort within the last 7 days." : "No work-related pain or discomfort was reported for the last 7 days."}
      </Text>
    </View>
  );
}

/**
 * Lists symptom body areas for one symptom grouping.
 */
export function SymptomList({ title, items }: { title: string; items: ReportBodySymptomArea[] }) {
  if (!items.length) return null;
  return (
    <View style={styles.symptomList}>
      <Text style={styles.symptomListTitle}>{title}</Text>
      {items.map((item) => (
        <Text key={item.id} style={styles.symptomBullet}>
          • {item.label}
        </Text>
      ))}
    </View>
  );
}

/**
 * Three-row priority count component used for total and category summaries.
 */
export function PriorityBreakdown({ counts }: { counts: { high: number; medium: number; review: number } }) {
  return (
    <View style={styles.priorityBreakdown}>
      <PriorityRow icon={reportAssets.icons.highPriority} label="High priority" sublabel="Action required" count={counts.high} tone="high" />
      <PriorityRow icon={reportAssets.icons.mediumPriority} label="Medium priority" sublabel="Consider controls" count={counts.medium} tone="medium" />
      <PriorityRow icon={reportAssets.icons.reviewPriority} label="Review priority" sublabel="Further evaluation" count={counts.review} tone="review" />
    </View>
  );
}

/**
 * One row in the priority breakdown.
 */
function PriorityRow({ icon, label, sublabel, count, tone }: { icon: string; label: string; sublabel: string; count: number; tone: Exclude<ReviewPriority, "low"> }) {
  return (
    <View style={styles.priorityRow}>
      <Image src={icon} style={styles.priorityIcon} />
      <View style={styles.priorityText}>
        <Text style={styles.priorityLabel}>{label}</Text>
        <Text style={styles.prioritySubLabel}>{sublabel}</Text>
      </View>
      <View style={[styles.priorityCountBox, priorityCountBoxStyle(tone)]}>
        <Text style={[styles.priorityCountText, priorityCountTextStyle(tone)]}>{count}</Text>
      </View>
    </View>
  );
}

/**
 * Simple text bullet list. React PDF does not provide native list layout.
 */
export function BulletList({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <Text key={item} style={styles.bullet}>
          • {item}
        </Text>
      ))}
    </View>
  );
}

/**
 * Fixed page number shown at the bottom-right of every PDF page.
 */
export function PageNumber() {
  return <Text fixed style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />;
}
