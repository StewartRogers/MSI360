import { Document, Image, Line, Link, Page, Path, Rect, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import { reportAssets } from "./reportAssets";
import type { ReportAiGeneratedAnalysis, ReportBodySymptomArea, ReportBodySymptoms, ReportCategorySummary, ReportData, ReviewPriority } from "./reportData";
import { BodyDiagramSvg } from "./BodyDiagramSvg";

const colors = {
  black: "#111111",
  text: "#222222",
  muted: "#737373",
  border: "#e5e7eb",
  paleBlue: "#e2eff7",
  paleOrange: "#fbebc4",
  orange: "#f97316",
  amber: "#f59e0b",
  red: "#ef4444",
  green: "#22c55e",
  page: "#ffffff",
  bgGray: "#f9fafb"
};

export function ReportDocument({ report }: { report: ReportData }) {
  return (
    <Document title="MSI 360 Risk Score Report" author="MSI360">
      <Page size={[612, 792]} style={styles.page} wrap>
        <IntroContent report={report} />
        <OverviewContent report={report} />
        <CategoriesFlowContent report={report} />
        <ResponseRecordContent report={report} />
        <PageNumber />
      </Page>
    </Document>
  );
}

function IntroContent({ report }: { report: ReportData }) {
  return (
    <View style={styles.pageContent}>
      <Text style={styles.introTitle}>MSI 360 Risk Score Report</Text>

      <View style={styles.metaGrid} wrap={false}>
        <View style={styles.metaGridRow}>
          <View style={styles.metaGridCell}><MetaItem icon={reportAssets.icons.calendar} label="Date" value={report.generatedDate} /></View>
          <View style={styles.metaGridCell}><MetaItem icon={reportAssets.icons.people} label="Responder context" value={report.responderContext} iconSize="large" /></View>
        </View>
        <View style={styles.metaGridDivider} />
        <View style={styles.metaGridRow}>
          <View style={styles.metaGridCell}><MetaItem icon={reportAssets.icons.carrierBag} label="Job / Task performed" value={report.taskSummary} /></View>
          <View style={styles.metaGridCell}><MetaItem icon={reportAssets.icons.worker} label="Worker height" value={report.workerHeight} iconFit="contain" centerIcon /></View>
        </View>
      </View>

      {report.responderContextNote && <Text style={styles.responderContextNote}>{report.responderContextNote}</Text>}

      <View style={styles.noticeBand} wrap={false}>
        <Image src={reportAssets.icons.shield} style={styles.noticeIcon} />
        <View style={styles.noticeDivider} />
        <Text style={styles.noticeText}>
          Musculoskeletal injuries (MSIs) account for one-third of all workplace injuries in B.C. Taking action on this report can help you prevent them.
        </Text>
      </View>

      <NumberedSection number="1" title="About this report">
        <Text style={styles.paragraph}>
          For the selected job or task this report summarizes the risk factors that could be associated with an increased risk of a musculoskeletal injury. It is based on the worker's responses and is intended to support a practical conversation between the worker and employer. The goal is to identify where MSI risks may exist, understand which areas need attention, and help guide safer work design.
        </Text>
        <Text style={styles.paragraph}>This report is not a full workplace assessment. It is a starting point for discussion and action.</Text>
      </NumberedSection>

      <NumberedSection number="2" title="Privacy note">
        <Text style={styles.paragraph}>Information entered into MSI 360 is not stored, shared, or made available to WorkSafeBC unless the worker chooses to share the report.</Text>
      </NumberedSection>

      <NumberedSection number="3" title="Who should use this report?">
        <View style={styles.twoColumnRow} wrap={false}>
          <AudienceCard icon={reportAssets.icons.workerHelmet} title="For workers" text="Use this report to understand which parts of your work may increase MSI risk. You can share it with your supervisor or employer and discuss possible improvements." />
          <AudienceCard icon={reportAssets.icons.people} title="For employers or supervisors" text="Use this report to identify where the worker may need support. The results can help guide conversations, prioritize changes, and reduce MSI risk." />
        </View>
      </NumberedSection>

      <NumberedSection number="4" title="Using this report">
        <View style={styles.usingBox} wrap={false}>
          <BulletList
            items={[
              "Start by reviewing the highest-priority risks.",
              "Then discuss the findings with the worker and consider whether the task, tools, workstation, schedule, or work process can be improved.",
              "Risk reduction should focus on practical changes to the work itself whenever possible."
            ]}
          />
        </View>
      </NumberedSection>

      <NumberedSection number="5" title="Risk categories assessed">
        <View style={styles.categoryIntroGrid} wrap={false}>
          {report.categories.map((category) => (
            <View key={category.key} style={styles.categoryIntroCard}>
              <Text style={styles.categoryIntroTitle}>{category.label}</Text>
              <Text style={styles.categoryIntroText}>{category.description}</Text>
            </View>
          ))}
        </View>
      </NumberedSection>
    </View>
  );
}

function OverviewContent({ report }: { report: ReportData }) {
  return (
    <View style={styles.pageContent}>
      <View style={{ marginTop: 32 }} />
      <Text style={styles.pageHeading}>Overview of Results</Text>
      <Text style={styles.pageIntro}>This page summarizes reported symptoms, overall MSI risk counts, and practical guidance for reducing risk.{"\n"}Detailed category score pages and the full response record appear later in the report.</Text>

      <Text style={styles.sectionHeading}>Overall MSI Risk Score Summary</Text>
      <View style={styles.overallSummary} wrap={false}>
        <View style={styles.bigMetric}>
          <View style={styles.shieldIconWrapper}>
            <Image src={reportAssets.icons.shield} style={styles.bigShieldIcon} />
          </View>
          <Text style={styles.metricLabel}>Total MSI hazards identified</Text>
          <Text style={styles.metricValue}>{report.totalHazards}</Text>
          <Text style={styles.metricHelp}>{report.totalHazards ? "Review category pages for details." : "No scored hazards were identified in\nthis report overview."}</Text>
        </View>
        <PriorityBreakdown counts={report.priorityTotals} />
      </View>

      {report.overallScore.psychosocialMessage && <Text style={styles.psychosocialNote}>{report.overallScore.psychosocialMessage}</Text>}

      <View style={styles.infoLineContainer} wrap={false}>
        <View style={styles.infoIconCircleSmall}>
          <Text style={styles.infoIconCharSmall}>i</Text>
        </View>
        <Text style={styles.infoLine}>Higher-priority risks should be reviewed first. This report remains a starting point for discussion and action.</Text>
      </View>

      <Text style={styles.sectionHeading}>Current symptoms</Text>
      <SymptomsAlert symptoms={report.symptoms} />
      <View style={styles.symptomDiagramRow} wrap={false}>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <SymptomList title="Reported on both sides of the body" items={report.symptoms.bothSides} />
          <SymptomList title="Reported on one side of the body" items={report.symptoms.oneSide} />
        </View>
        <BodyDiagramSvg symptoms={report.symptoms} />
      </View>

      <View style={report.aiGeneratedAnalysis ? styles.noteGrid : styles.noteBlock} wrap={false}>
        <View style={report.aiGeneratedAnalysis ? styles.noteGridItem : undefined}>
          <Text style={styles.sectionHeading}>{report.jobSpecificNote.title}</Text>
          <Text style={styles.paragraph}>{report.jobSpecificNote.body}</Text>
          {report.jobSpecificNote.linkLabel && <Text style={styles.linkText}>{report.jobSpecificNote.linkLabel}</Text>}
        </View>
        {report.aiGeneratedAnalysis && <AiGeneratedAnalysisBlock analysis={report.aiGeneratedAnalysis} />}
      </View>

      <View style={styles.controlsRow} wrap={false}>
        <View style={styles.controlsText}>
          <Text style={styles.sectionHeading}>How to approach reducing risks</Text>
          <Text style={styles.paragraph}>
            Risk reduction should begin with the most effective controls first. Where possible, remove or reduce the hazard at the source before relying on personal protective equipment.
          </Text>
          <Text style={styles.paragraph}>The following pages present category-specific MSI scores, plain-language explanations, and suggested actions. The full list of questions and answers is provided at the end of the report as a response record.</Text>
        </View>
        <Image src={reportAssets.images.hierarchyOfControls} style={styles.hierarchyImage} />
      </View>
    </View>
  );
}

function CategoriesFlowContent({ report }: { report: ReportData }) {
  return (
    <View style={styles.pageContent}>
      <View style={{ marginTop: 32 }} />
      <Text style={styles.pageHeading}>MSI Risk Score Summary by Category</Text>
      <Text style={styles.pageIntro}>The following table summarizes the MSI Risk Score for each assessed risk category.{"\n"}Each score is based on the worker's responses and is intended to help identify which areas may need review first.</Text>

      <Text style={styles.noteTextBold}>NOTE:</Text>
      <Text style={styles.noteText}>
        Even when no scored hazard is identified, reported discomfort should still be reviewed alongside the worker's task, workstation layout, tools or objects handled, and work-organization factors such as pace, recovery, and task variability.
      </Text>

      <View style={styles.categoryTable} wrap={false}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.categoryNameCell]}>Risk category</Text>
          <Text style={[styles.tableCell, styles.scoreCell]}>Score</Text>
          <Text style={[styles.tableCell, styles.statusCell]}>Current status</Text>
          <Text style={[styles.tableCell, styles.priorityCell]}>Review priority</Text>
        </View>
        {report.categories.map((category) => (
          <View key={category.key} style={styles.tableRow}>
            <View style={[styles.tableCell, styles.categoryNameCell, styles.tableCategoryName]}>
              <Image src={category.icon} style={styles.tableIcon} />
              <Text>{category.label}</Text>
            </View>
            <Text style={[styles.tableCell, styles.scoreCell, styles.tableScore]}>{category.scoreDisplay}</Text>
            <Text style={[styles.tableCell, styles.statusCell, styles.tableStatus]}>{category.currentStatus}</Text>
            <View style={[styles.tableCell, styles.priorityCell]}>
              <View style={[styles.priorityPill, priorityPillStyle(category.reviewPriority)]}>
                <Text style={[styles.priorityPillText, priorityPillTextStyle(category.reviewPriority)]}>{category.priorityLabel}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.tableFootnote}>A score of 0 means that no scored MSI hazard was identified for that category based on the worker's recorded answers.</Text>

      <View style={styles.thickDivider} />

      {report.categories.map((category, index) => (
        <View key={category.key} style={styles.categoryDetailSection}>
          <Text style={styles.detailHeading}>{category.label} MSI score</Text>

          <View style={styles.categoryDetailGrid} wrap={false}>
            <View style={styles.categoryMetricPanel}>
              <Text style={styles.metricLabel}>Total MSI hazards identified</Text>
              <Text style={[styles.metricValue, styles.categoryScoreValue]}>{category.hazardCount}</Text>
              <Text style={styles.metricScoreLabel}>Score: {category.scoreDisplay}</Text>
              <Text style={styles.metricSeverity}>{category.severity === "No scored hazard identified" ? "No scored hazards identified." : category.severity}</Text>
            </View>
            <PriorityBreakdown counts={category.priorityCounts} />
            <View style={styles.tipsPanel}>
              <Text style={styles.detailLabel}>Tips :</Text>
              {(category.tips.length ? category.tips : ["Review the selected responses with the worker and look for practical changes to the work."]).map((tip) => (
                <Text key={tip} style={styles.tipText}>
                  {tip}
                </Text>
              ))}
            </View>
          </View>

          <Text style={styles.detailLabel}>Explanation:</Text>
          <Text style={styles.paragraph}>{category.explanation}</Text>

          <Text style={styles.detailLabel}>Suggested actions</Text>
          <BulletList items={category.suggestedActions} />
          {index < report.categories.length - 1 && <View style={styles.thickDivider} />}
        </View>
      ))}

    </View>
  );
}

function ResponseRecordContent({ report }: { report: ReportData }) {
  return (
    <View style={styles.pageContent}>
      <View style={{ marginTop: 32 }} />
      <Text style={styles.pageHeading}>Response record</Text>
      <Text style={styles.pageIntro}>This appendix lists the English question text and recorded answers used to generate the report.</Text>

      {report.answerRecords.map((record) => (
        <View key={record.questionId} style={styles.answerRecord}>
          <Text style={styles.answerQuestion}>{record.question}</Text>
          {record.answers.map((answer) => (
            <Text key={answer} style={styles.answerText}>
              {answer}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function AiGeneratedAnalysisBlock({ analysis }: { analysis: ReportAiGeneratedAnalysis }) {
  return (
    <View style={styles.aiAnalysisBlock}>
      <Text style={styles.sectionHeading}>{analysis.title}</Text>
      <Text style={styles.aiAnalysisDisclaimer}>{analysis.disclaimer}</Text>
      <Text style={styles.paragraph}>{analysis.paragraph}</Text>
      <Text style={styles.aiAnalysisSourcesLabel}>Sources:</Text>
      {analysis.sources.map((source) => (
        <Link key={source.url} src={source.url} style={styles.aiAnalysisSourceLink}>
          {source.label}
        </Link>
      ))}
    </View>
  );
}

function MetaItem({
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

function NumberedSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
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

function AudienceCard({ icon, title, text }: { icon: string; title: string; text: string }) {
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

function SymptomsAlert({ symptoms }: { symptoms: ReportBodySymptoms }) {
  return (
    <View style={[styles.symptomAlert, symptoms.reported ? styles.symptomAlertWarn : styles.symptomAlertClear]} wrap={false}>
      <Image src={symptoms.reported ? reportAssets.icons.alert : reportAssets.icons.shield} style={styles.alertIcon} />
      <Text style={styles.symptomAlertText}>
        {symptoms.reported ? "Important: The worker reported work-related pain or discomfort within the last 7 days." : "No work-related pain or discomfort was reported for the last 7 days."}
      </Text>
    </View>
  );
}

function SymptomList({ title, items }: { title: string; items: ReportBodySymptomArea[] }) {
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


function PriorityBreakdown({ counts }: { counts: { high: number; medium: number; review: number } }) {
  return (
    <View style={styles.priorityBreakdown}>
      <PriorityRow icon={reportAssets.icons.highPriority} label="High priority" sublabel="Action required" count={counts.high} tone="high" />
      <PriorityRow icon={reportAssets.icons.mediumPriority} label="Medium priority" sublabel="Consider controls" count={counts.medium} tone="medium" />
      <PriorityRow icon={reportAssets.icons.reviewPriority} label="Review priority" sublabel="Further evaluation" count={counts.review} tone="review" />
    </View>
  );
}

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

function BulletList({ items }: { items: string[] }) {
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

function PageNumber() {
  return <Text fixed style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />;
}

function priorityPillStyle(priority: ReviewPriority) {
  if (priority === "high") return styles.highPill;
  if (priority === "medium") return styles.mediumPill;
  if (priority === "review") return styles.reviewPill;
  return styles.lowPill;
}

function priorityPillTextStyle(priority: ReviewPriority) {
  if (priority === "high") return styles.highPillText;
  if (priority === "medium") return styles.mediumPillText;
  if (priority === "review") return styles.reviewPillText;
  return styles.lowPillText;
}

function priorityCountBoxStyle(priority: Exclude<ReviewPriority, "low">) {
  if (priority === "high") return styles.highCountBox;
  if (priority === "medium") return styles.mediumCountBox;
  return styles.reviewCountBox;
}

function priorityCountTextStyle(priority: Exclude<ReviewPriority, "low">) {
  if (priority === "high") return styles.highCountText;
  if (priority === "medium") return styles.mediumCountText;
  return styles.reviewCountText;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.page,
    color: colors.text,
    fontFamily: "Helvetica",
    fontSize: 9,
    padding: "42 42 42"
  },
  introPage: {
    backgroundColor: colors.page,
    color: colors.text,
    fontFamily: "Helvetica",
    fontSize: 9,
    padding: "42 42 42"
  },
  pageContent: {
    width: "100%"
  },
  pageHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 6
  },
  pageIntro: {
    fontSize: 9,
    lineHeight: 1.3,
    marginBottom: 16
  },
  introTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 16
  },
  metaGrid: {
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    backgroundColor: colors.bgGray,
    padding: "8 12",
    marginBottom: 12
  },
  metaGridRow: {
    flexDirection: "row",
    alignItems: "stretch"
  },
  metaGridCell: {
    width: "50%",
    paddingVertical: 4,
    paddingRight: 12
  },
  metaGridDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 4
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 24
  },
  metaIcon: {
    width: 20,
    height: 20,
    marginRight: 6
  },
  metaIconLarge: {
    width: 26,
    height: 26,
    marginRight: 8
  },
  metaIconContain: {
    width: 20,
    height: 20,
    objectFit: "contain"
  },
  metaIconSlot: {
    width: 26,
    height: 24,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  metaTextCol: {
    justifyContent: "center",
    flex: 1
  },
  metaLabel: {
    fontSize: 8,
    fontWeight: "bold"
  },
  metaValue: {
    fontWeight: "normal"
  },
  responderContextNote: {
    backgroundColor: "#fff7ed",
    border: `1 solid ${colors.paleOrange}`,
    borderRadius: 4,
    color: colors.text,
    fontSize: 8.5,
    lineHeight: 1.25,
    marginBottom: 12,
    padding: "8 10"
  },
  noticeBand: {
    backgroundColor: colors.paleBlue,
    borderRadius: 4,
    padding: "12 24",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  noticeIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  noticeDivider: {
    width: 2,
    height: 28,
    backgroundColor: colors.orange,
    marginRight: 10
  },
  noticeText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.3
  },
  numberedSection: {
    borderBottom: `1 solid ${colors.border}`,
    paddingBottom: 10,
    marginBottom: 10
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  numberBadge: {
    width: 16,
    height: 16,
    backgroundColor: colors.orange,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6
  },
  numberText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold"
  },
  numberedTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.black
  },
  paragraph: {
    fontSize: 9,
    lineHeight: 1.35,
    marginBottom: 8
  },
  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  audienceCard: {
    width: "48%",
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "14 12",
    flexDirection: "row",
    alignItems: "center"
  },
  audienceIcon: {
    width: 40,
    height: 40,
    marginRight: 12
  },
  audienceText: {
    flex: 1
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5
  },
  smallText: {
    fontSize: 7.5,
    lineHeight: 1.3
  },
  categoryIntroGrid: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryIntroCard: {
    width: "19%",
    minHeight: 64,
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "10 6",
    alignItems: "center"
  },
  categoryIntroTitle: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6
  },
  categoryIntroText: {
    fontSize: 6.5,
    lineHeight: 1.25,
    textAlign: "center"
  },
  usingBox: {
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "14 24"
  },
  bullet: {
    fontSize: 9,
    lineHeight: 1.35,
    marginBottom: 6
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 8
  },
  symptomAlert: {
    border: `1 solid ${colors.paleOrange}`,
    borderRadius: 4,
    padding: "10 20",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  symptomAlertWarn: {
    backgroundColor: colors.paleOrange
  },
  symptomAlertClear: {
    backgroundColor: "#f2f7f0",
    border: "1 solid #e0e8dd"
  },
  alertIcon: {
    width: 18,
    height: 18,
    marginRight: 8
  },
  symptomAlertText: {
    fontSize: 9
  },
  symptomDiagramRow: {
    flexDirection: "row",
    minHeight: 180,
    marginBottom: 20
  },
  symptomList: {
    marginBottom: 12
  },
  symptomListTitle: {
    fontSize: 9,
    marginBottom: 6
  },
  symptomBullet: {
    fontSize: 8.5,
    lineHeight: 1.3,
    paddingLeft: 8
  },
  bodyDiagram: {
    width: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  bodyDiagramCaption: {
    width: 160,
    color: colors.muted,
    fontSize: 7,
    textAlign: "center",
    marginTop: 8
  },
  noteBlock: {
    marginBottom: 20
  },
  noteGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  noteGridItem: {
    width: "48%"
  },
  aiAnalysisBlock: {
    width: "48%",
    borderLeft: `2 solid ${colors.paleBlue}`,
    paddingLeft: 10
  },
  aiAnalysisDisclaimer: {
    color: colors.muted,
    fontSize: 7.5,
    lineHeight: 1.25,
    marginBottom: 6
  },
  aiAnalysisSourcesLabel: {
    color: colors.muted,
    fontSize: 7.5,
    fontWeight: "bold",
    marginBottom: 3
  },
  aiAnalysisSourceLink: {
    color: "#0284c7",
    fontSize: 7.5,
    lineHeight: 1.3,
    marginBottom: 2,
    textDecoration: "none"
  },
  linkText: {
    color: "#0284c7",
    fontSize: 9,
    fontWeight: "bold"
  },
  overallSummary: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  bigMetric: {
    width: 240,
    alignItems: "center"
  },
  shieldIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff6f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  bigShieldIcon: {
    width: 32,
    height: 32
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center"
  },
  metricValue: {
    color: colors.orange,
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center"
  },
  metricHelp: {
    color: colors.muted,
    fontSize: 7.5,
    lineHeight: 1.25,
    textAlign: "center"
  },
  metricScoreLabel: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4
  },
  metricSeverity: {
    color: colors.muted,
    fontSize: 7.5,
    lineHeight: 1.25,
    textAlign: "center",
    fontStyle: "italic"
  },
  priorityBreakdown: {
    width: "35%"
  },
  priorityRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottom: `1 solid ${colors.border}`,
    padding: "8 0"
  },
  priorityIcon: {
    width: 24,
    height: 24,
    marginRight: 12
  },
  priorityText: {
    flex: 1
  },
  priorityLabel: {
    color: colors.black,
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 2
  },
  prioritySubLabel: {
    color: colors.muted,
    fontSize: 7.5
  },
  priorityCountBox: {
    width: 48,
    padding: "6 0",
    borderRadius: 4,
    alignItems: "center"
  },
  priorityCountText: {
    fontSize: 10,
    fontWeight: "bold"
  },
  highCountBox: { backgroundColor: "#fee2e2" },
  highCountText: { color: "#b91c1c" },
  mediumCountBox: { backgroundColor: "#fef3c7" },
  mediumCountText: { color: "#d97706" },
  reviewCountBox: { backgroundColor: "#fef9c3" },
  reviewCountText: { color: "#a16207" },
  psychosocialNote: {
    color: "#7a4090",
    fontSize: 9,
    marginBottom: 12
  },
  infoLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24
  },
  infoIconCircleSmall: {
    width: 16,
    height: 16,
    borderRadius: 8,
    border: `1 solid ${colors.black}`,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  },
  infoIconCharSmall: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.black
  },
  infoLine: {
    fontSize: 9,
    color: colors.black
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8
  },
  controlsText: {
    width: "48%",
    marginRight: 24
  },
  hierarchyImage: {
    width: 250,
    height: 180,
    objectFit: "contain"
  },
  noteTextBold: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 2
  },
  noteText: {
    fontSize: 9,
    lineHeight: 1.3,
    marginBottom: 20
  },
  categoryTable: {
    width: "100%",
    border: `1 solid ${colors.border}`,
    borderRadius: 4
  },
  tableRow: {
    flexDirection: "row",
    minHeight: 42,
    borderBottom: `1 solid ${colors.border}`,
    alignItems: "center"
  },
  tableHeader: {
    minHeight: 34,
    backgroundColor: colors.bgGray
  },
  tableCell: {
    padding: "8 12",
    fontSize: 8.5,
    borderRight: `1 solid ${colors.border}`
  },
  categoryNameCell: { width: "35%" },
  scoreCell: { width: "15%", textAlign: "center", fontWeight: "bold" },
  statusCell: { width: "30%", textAlign: "center", color: colors.muted },
  priorityCell: { width: "20%", borderRightWidth: 0, alignItems: "center" },
  tableCategoryName: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold"
  },
  tableIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  tableScore: {
    color: colors.orange,
    fontSize: 16
  },
  tableStatus: {},
  priorityPill: {
    padding: "4 12",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  priorityPillText: {
    fontSize: 8,
    fontWeight: "bold"
  },
  highPill: { backgroundColor: "#fef2f2", borderColor: "#fecaca" },
  highPillText: { color: "#ef4444" },
  mediumPill: { backgroundColor: "#fffbeb", borderColor: "#fde68a" },
  mediumPillText: { color: "#f59e0b" },
  reviewPill: { backgroundColor: "#fefce8", borderColor: "#fef08a" },
  reviewPillText: { color: "#eab308" },
  lowPill: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" },
  lowPillText: { color: "#22c55e" },
  tableFootnote: {
    fontSize: 7.5,
    marginTop: 8,
    marginBottom: 16
  },
  thickDivider: {
    height: 1,
    backgroundColor: "#cccccc",
    margin: "16 0"
  },
  categoryDetailSection: {
    marginBottom: 8
  },
  detailHeading: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 16
  },
  categoryDetailGrid: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  categoryMetricPanel: {
    width: 140,
    alignItems: "center",
    marginRight: 20
  },
  categoryScoreValue: {
    color: colors.amber,
    fontSize: 42,
    margin: "6 0"
  },
  tipsPanel: {
    width: "35%",
    paddingLeft: 20,
    borderLeft: `1 solid ${colors.border}`
  },
  detailLabel: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 6
  },
  tipText: {
    fontSize: 9,
    lineHeight: 1.4,
    marginBottom: 8
  },
  answerRecord: {
    borderBottom: `1 solid ${colors.border}`,
    paddingBottom: 8,
    marginBottom: 8
  },
  answerQuestion: {
    fontSize: 9.5,
    fontWeight: "bold",
    lineHeight: 1.3,
    marginBottom: 4
  },
  answerText: {
    fontSize: 8.5,
    lineHeight: 1.3,
    color: colors.text,
    marginBottom: 2
  },
  pageNumber: {
    position: "absolute",
    bottom: 22,
    right: 42,
    color: colors.muted,
    fontSize: 8
  }
});
