import { Document, Image, Line, Page, Path, Rect, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import { reportAssets } from "./reportAssets";
import type { ReportBodySymptoms, ReportCategorySummary, ReportData, ReviewPriority } from "./reportData";

const colors = {
  black: "#111111",
  text: "#222222",
  muted: "#737373",
  border: "#d7d7d7",
  paleBlue: "#dceaf1",
  paleOrange: "#ffebbf",
  orange: "#f45b0b",
  amber: "#f8bc3e",
  red: "#ff3f45",
  green: "#dff0d8",
  page: "#ffffff"
};

export function ReportDocument({ report }: { report: ReportData }) {
  return (
    <Document title="MSI 360 Risk Tool Report" author="MSI360">
      <IntroPage report={report} />
      <OverviewPage report={report} />
      <CategorySummaryPage report={report} />
      {report.categories.map((category) => (
        <CategoryDetailPage key={category.key} report={report} category={category} />
      ))}
      <ResponseRecordPage report={report} />
    </Document>
  );
}

function IntroPage({ report }: { report: ReportData }) {
  return (
    <Page size={[612, 792]} style={styles.introPage}>
      <Text style={styles.introTitle}>MSI 360 Risk Tool Report</Text>
      <View style={styles.metaStrip} wrap={false}>
        <MetaItem icon={reportAssets.icons.calendar} label="Date" value={report.generatedDate} />
        <MetaItem icon={reportAssets.icons.carrierBag} label="Job / Task assessed" value={report.taskSummary} />
        <MetaItem icon={reportAssets.icons.worker} label="Worker height" value={report.workerHeight} />
      </View>

      <View style={styles.noticeBand} wrap={false}>
        <Image src={reportAssets.icons.shield} style={styles.noticeIcon} />
        <View style={styles.noticeDivider} />
        <Text style={styles.noticeText}>
          Musculoskeletal injuries (MSIs) like sprains and strains account for one-third of all workplace injuries in B.C. Taking action on this report can help you prevent them.
        </Text>
      </View>

      <NumberedSection numberIcon={reportAssets.icons.circleOne} title="About this report">
        <Text style={styles.paragraph}>
          This report summarizes possible musculoskeletal injury risk factors for the selected job or task. It is based on the worker's responses and is intended to support a practical conversation between the worker and employer.
        </Text>
        <Text style={styles.paragraph}>This report is not a full workplace assessment. It is a starting point for discussion and action.</Text>
      </NumberedSection>

      <NumberedSection numberIcon={reportAssets.icons.circleTwo} title="Privacy note">
        <Text style={styles.paragraph}>Information entered into MSI 360 is not stored, shared, or made available to WorkSafeBC unless the worker chooses to share the report.</Text>
      </NumberedSection>

      <NumberedSection numberIcon={reportAssets.icons.circleThree} title="Who should use this report?">
        <View style={styles.twoColumnRow} wrap={false}>
          <AudienceCard icon={reportAssets.icons.workerHelmet} title="For workers" text="Use this report to understand which parts of your work may increase MSI risk. You can share it with your supervisor or employer and discuss possible improvements." />
          <AudienceCard icon={reportAssets.icons.people} title="For employers or supervisors" text="Use this report to identify where the worker may need support. The results can help guide conversations, prioritize changes, and reduce MSI risk." />
        </View>
      </NumberedSection>

      <NumberedSection numberIcon={reportAssets.icons.circleFour} title="Risk categories assessed">
        <View style={styles.categoryIntroGrid} wrap={false}>
          {report.categories.map((category) => (
            <View key={category.key} style={styles.categoryIntroCard}>
              <Text style={styles.categoryIntroTitle}>{category.label}</Text>
              <Text style={styles.categoryIntroText}>{category.description}</Text>
            </View>
          ))}
        </View>
      </NumberedSection>

      <NumberedSection numberIcon={reportAssets.icons.circleFive} title="How to read the report">
        <View style={styles.readingBox} wrap={false}>
          <View style={styles.readingRows}>
            <DefinitionRow label="Score" text="A risk value based on the worker's answers." />
            <DefinitionRow label="Risk level" text="A plain-language description of the score." />
            <DefinitionRow label="Why it matters" text="A short explanation of the possible MSI concern." />
            <DefinitionRow label="Suggested actions" text="Practical steps that may help reduce the risk." />
          </View>
          <View style={styles.infoCallout}>
            <Image src={reportAssets.icons.info} style={styles.infoIcon} />
            <Text style={styles.infoText}>Higher-risk areas should be reviewed first.</Text>
          </View>
        </View>
      </NumberedSection>

      <NumberedSection numberIcon={reportAssets.icons.circleSix} title="Using this report">
        <View style={styles.usingBox} wrap={false}>
          <BulletList
            items={[
              "Start by reviewing the highest-priority risks.",
              "Discuss the findings with the worker and consider whether the task, tools, workstation, schedule, or work process can be improved.",
              "Risk reduction should focus on practical changes to the work itself whenever possible."
            ]}
          />
        </View>
      </NumberedSection>
      <PageNumber />
    </Page>
  );
}

function OverviewPage({ report }: { report: ReportData }) {
  return (
    <ReportPage report={report} heading="Overview of results" intro="This page summarizes reported symptoms, overall MSI risk counts, and practical guidance for reducing risk. Detailed category score pages and the full response record appear later in the report.">
      <Text style={styles.sectionHeading}>Current symptoms</Text>
      <SymptomsAlert symptoms={report.symptoms} />
      <View style={styles.symptomDiagramRow} wrap={false}>
        <SymptomList title="Reported on both sides of the body" items={report.symptoms.bothSides} />
        <SymptomList title="Reported on one side of the body" items={report.symptoms.oneSide} />
        <BodyDiagram symptoms={report.symptoms} />
      </View>

      <View style={styles.noteBlock} wrap={false}>
        <Text style={styles.sectionHeading}>{report.jobSpecificNote.title}</Text>
        <Text style={styles.paragraph}>{report.jobSpecificNote.body}</Text>
        {report.jobSpecificNote.linkLabel && <Text style={styles.linkText}>{report.jobSpecificNote.linkLabel}</Text>}
      </View>

      <Text style={styles.sectionHeading}>Overall MSI risk summary</Text>
      <View style={styles.overallSummary} wrap={false}>
        <View style={styles.bigMetric}>
          <Image src={reportAssets.icons.shield} style={styles.bigShieldIcon} />
          <Text style={styles.metricLabel}>Total MSI hazards identified</Text>
          <Text style={styles.metricValue}>{report.totalHazards}</Text>
          <Text style={styles.metricHelp}>{report.totalHazards ? "Review category pages for details." : "No scored hazards were identified in this report overview."}</Text>
        </View>
        <PriorityBreakdown counts={report.priorityTotals} />
      </View>
      {report.overallScore.psychosocialMessage && <Text style={styles.psychosocialNote}>{report.overallScore.psychosocialMessage}</Text>}
      <Text style={styles.infoLine}>Higher-priority risks should be reviewed first. This report remains a starting point for discussion and action.</Text>

      <View style={styles.controlsRow} wrap={false}>
        <View style={styles.controlsText}>
          <Text style={styles.sectionHeading}>How to approach reducing risks</Text>
          <Text style={styles.paragraph}>
            Risk reduction should begin with the most effective controls first. Where possible, remove or reduce the hazard at the source before relying on personal protective equipment.
          </Text>
          <Text style={styles.paragraph}>The following pages present category-specific MSI scores, plain-language explanations, and suggested actions.</Text>
        </View>
        <Image src={reportAssets.images.hierarchyOfControls} style={styles.hierarchyImage} />
      </View>
    </ReportPage>
  );
}

function CategorySummaryPage({ report }: { report: ReportData }) {
  return (
    <ReportPage report={report} heading="Category score summary" intro="The following table summarizes the MSI score for each assessed risk category. Each score is based on the worker's responses and is intended to help identify which areas may need review first.">
      <Text style={styles.noteText}>
        NOTE: Even when no scored hazard is identified, reported discomfort should still be reviewed alongside the worker's task, workstation layout, tools or objects handled, and work-organization factors such as pace, recovery, and task variability.
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
              <Text style={[styles.priorityPill, priorityPillStyle(category.reviewPriority)]}>{category.priorityLabel}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.tableFootnote}>A score of 0 means that no scored MSI hazard was identified for that category based on the worker's recorded answers.</Text>
    </ReportPage>
  );
}

function CategoryDetailPage({ report, category }: { report: ReportData; category: ReportCategorySummary }) {
  return (
    <ReportPage report={report} heading={`${category.label} MSI score`}>
      <View style={styles.categoryDetailGrid} wrap={false}>
        <View style={styles.categoryMetricPanel}>
          <Text style={styles.metricLabel}>MSI score</Text>
          <Text style={[styles.metricValue, styles.categoryScoreValue]}>{category.scoreDisplay}</Text>
          <Text style={styles.metricHelp}>{category.severity}</Text>
          <Text style={styles.metricHelp}>{category.applicableQuestions} applicable questions reviewed.</Text>
          <Text style={styles.metricHelp}>{category.currentStatus}</Text>
        </View>
        <PriorityBreakdown counts={category.priorityCounts} />
        <View style={styles.tipsPanel}>
          <Text style={styles.detailLabel}>Tips:</Text>
          {(category.tips.length ? category.tips : ["Review the selected responses with the worker and look for practical changes to the work."]).map((tip) => (
            <Text key={tip} style={styles.tipText}>
              {tip}
            </Text>
          ))}
        </View>
      </View>

      <Text style={styles.detailLabel}>Explanation:</Text>
      <Text style={styles.paragraph}>{category.explanation}</Text>

      {category.drivers.length > 0 && (
        <View style={styles.driverBox}>
          <Text style={styles.detailLabel}>Responses contributing to this category:</Text>
          {category.drivers.slice(0, 8).map((driver) => (
            <Text key={`${driver.questionId}-${driver.groupLabel || "main"}-${driver.optionId}-${driver.factor}`} style={styles.driverText}>
              {driver.groupLabel ? `${driver.groupLabel}: ` : ""}
              {driver.optionLabel} ({driver.score}/4)
            </Text>
          ))}
        </View>
      )}

      <Text style={styles.detailLabel}>Suggested actions</Text>
      <BulletList items={category.suggestedActions} />
    </ReportPage>
  );
}

function ResponseRecordPage({ report }: { report: ReportData }) {
  return (
    <ReportPage report={report} heading="Response record" intro="This appendix lists the English question text and recorded answers used to generate the report.">
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
    </ReportPage>
  );
}

function ReportPage({ report, heading, intro, children }: { report: ReportData; heading: string; intro?: string; children: React.ReactNode }) {
  return (
    <Page size={[612, 792]} style={styles.page}>
      <View fixed style={styles.fixedHeader}>
        <View>
          <Text style={styles.headerTitle}>MSI 360 Risk Tool Report</Text>
          <Text style={styles.pageHeading}>{heading}</Text>
        </View>
        <View style={styles.headerMeta}>
          <Text style={styles.headerMetaText}>
            <Text style={styles.bold}>Date: </Text>
            {report.generatedDate}
          </Text>
          <Text style={styles.headerMetaText}>
            <Text style={styles.bold}>Worker height: </Text>
            {report.workerHeight}
          </Text>
          <Text style={styles.headerMetaText}>
            <Text style={styles.bold}>Job / Task assessed: </Text>
            {report.taskSummary}
          </Text>
        </View>
      </View>
      <View style={styles.pageContent}>
        {intro && <Text style={styles.pageIntro}>{intro}</Text>}
        {children}
      </View>
      <PageNumber />
    </Page>
  );
}

function MetaItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.metaItem}>
      <Image src={icon} style={styles.metaIcon} />
      <Text style={styles.metaText}>
        <Text style={styles.bold}>{label}: </Text>
        {value}
      </Text>
    </View>
  );
}

function NumberedSection({ numberIcon, title, children }: { numberIcon: string; title: string; children: React.ReactNode }) {
  return (
    <View style={styles.numberedSection} wrap={false}>
      <View style={styles.sectionTitleRow}>
        <Image src={numberIcon} style={styles.numberIcon} />
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

function DefinitionRow({ label, text }: { label: string; text: string }) {
  return (
    <View style={styles.definitionRow}>
      <Text style={styles.definitionLabel}>{label}</Text>
      <Text style={styles.definitionText}>{text}</Text>
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

function SymptomList({ title, items }: { title: string; items: string[] }) {
  return (
    <View style={styles.symptomList}>
      <Text style={styles.symptomListTitle}>{title}</Text>
      {items.length ? (
        items.map((item) => (
          <Text key={item} style={styles.symptomBullet}>
            - {item}
          </Text>
        ))
      ) : (
        <Text style={styles.mutedSmall}>No body areas recorded.</Text>
      )}
    </View>
  );
}

function BodyDiagram({ symptoms }: { symptoms: ReportBodySymptoms }) {
  const symptomCount = symptoms.oneSide.length + symptoms.bothSides.length + symptoms.lastedTwoDays.length;
  return (
    <View style={styles.bodyDiagram}>
      <Text style={styles.bodyDiagramTitle}>Body diagram</Text>
      <Svg width={150} height={190} viewBox="0 0 150 190">
        <Rect x={20} y={8} width={110} height={174} rx={10} fill="#ffffff" stroke={colors.border} />
        <Path d="M76 42 C91 42 100 54 98 70 C96 85 88 94 76 94 C64 94 56 85 54 70 C52 54 61 42 76 42 Z" fill="#f7f7f7" stroke="#333333" strokeWidth={1.2} />
        <Path d="M76 94 C73 116 70 133 67 151" stroke="#333333" strokeWidth={1.2} fill="none" />
        <Path d="M76 100 C57 108 45 103 35 88" stroke="#333333" strokeWidth={1.2} fill="none" />
        <Path d="M77 100 C96 107 109 101 118 87" stroke="#333333" strokeWidth={1.2} fill="none" />
        <Path d="M68 151 C56 164 49 173 43 182" stroke="#333333" strokeWidth={1.2} fill="none" />
        <Path d="M67 151 C79 164 86 174 91 184" stroke="#333333" strokeWidth={1.2} fill="none" />
        <Line x1={23} y1={116} x2={126} y2={116} stroke={colors.border} strokeWidth={1} />
        <Line x1={23} y1={154} x2={126} y2={154} stroke={colors.border} strokeWidth={1} />
      </Svg>
      <Text style={styles.bodyDiagramCaption}>
        {symptomCount ? `Callouts: ${formatBodyCallouts(symptoms)}` : "No symptom callouts recorded."}
      </Text>
    </View>
  );
}

function formatBodyCallouts(symptoms: ReportBodySymptoms) {
  const callouts = [
    ...symptoms.bothSides.map((label) => `${label} on both sides`),
    ...symptoms.oneSide.map((label) => `${label} on one side`),
    ...symptoms.lastedTwoDays.map((label) => `${label} for 2+ days`)
  ];
  const visible = callouts.slice(0, 3);
  const remaining = callouts.length - visible.length;
  return `${visible.join("; ")}${remaining > 0 ? `; +${remaining} more` : ""}`;
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
      <Text style={[styles.priorityCount, priorityCountStyle(tone)]}>{count}</Text>
    </View>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <Text key={item} style={styles.bullet}>
          - {item}
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

function priorityCountStyle(priority: Exclude<ReviewPriority, "low">) {
  if (priority === "high") return styles.highCount;
  if (priority === "medium") return styles.mediumCount;
  return styles.reviewCount;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.page,
    color: colors.text,
    fontFamily: "Helvetica",
    fontSize: 9,
    padding: "112 42 42"
  },
  introPage: {
    backgroundColor: colors.page,
    color: colors.text,
    fontFamily: "Helvetica",
    fontSize: 9,
    padding: "52 42 42"
  },
  pageContent: {
    width: "100%"
  },
  fixedHeader: {
    position: "absolute",
    top: 36,
    left: 42,
    right: 42,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 16
  },
  pageHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black
  },
  headerMeta: {
    width: 142,
    paddingTop: 2
  },
  headerMetaText: {
    fontSize: 8,
    lineHeight: 1.25,
    marginBottom: 8
  },
  pageIntro: {
    width: 410,
    fontSize: 9,
    lineHeight: 1.2,
    marginBottom: 22
  },
  introTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 12
  },
  metaStrip: {
    border: `1 solid ${colors.border}`,
    borderRadius: 3,
    padding: "12 36",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  metaItem: {
    width: "31%",
    flexDirection: "row",
    alignItems: "center"
  },
  metaIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  metaText: {
    fontSize: 8,
    lineHeight: 1.15
  },
  bold: {
    fontWeight: "bold"
  },
  noticeBand: {
    backgroundColor: colors.paleBlue,
    borderRadius: 3,
    padding: "12 70",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
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
    lineHeight: 1.25
  },
  numberedSection: {
    borderBottom: `1 solid ${colors.border}`,
    paddingBottom: 8,
    marginBottom: 7
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6
  },
  numberIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  numberedTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.black
  },
  paragraph: {
    fontSize: 9,
    lineHeight: 1.25,
    marginBottom: 7
  },
  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 6"
  },
  audienceCard: {
    width: "48%",
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: 14,
    flexDirection: "row",
    alignItems: "center"
  },
  audienceIcon: {
    width: 36,
    height: 36,
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
    fontSize: 6.5,
    lineHeight: 1.2
  },
  categoryIntroGrid: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryIntroCard: {
    width: "19%",
    minHeight: 56,
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "10 6",
    justifyContent: "center"
  },
  categoryIntroTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
  },
  categoryIntroText: {
    fontSize: 5.8,
    lineHeight: 1.15,
    textAlign: "center"
  },
  readingBox: {
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "12 34",
    flexDirection: "row",
    alignItems: "center"
  },
  readingRows: {
    flex: 1
  },
  definitionRow: {
    flexDirection: "row",
    marginBottom: 8
  },
  definitionLabel: {
    width: 120,
    fontSize: 8,
    fontWeight: "bold"
  },
  definitionText: {
    flex: 1,
    fontSize: 8
  },
  infoCallout: {
    width: 110,
    alignItems: "center"
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginBottom: 6
  },
  infoText: {
    fontSize: 8,
    lineHeight: 1.1,
    textAlign: "center"
  },
  usingBox: {
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "14 34"
  },
  bullet: {
    fontSize: 9,
    lineHeight: 1.25,
    marginBottom: 6
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 8
  },
  symptomAlert: {
    border: `1 solid ${colors.border}`,
    borderRadius: 4,
    padding: "10 70",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28
  },
  symptomAlertWarn: {
    backgroundColor: colors.paleOrange
  },
  symptomAlertClear: {
    backgroundColor: "#f2f7f0"
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
    minHeight: 170,
    marginBottom: 14
  },
  symptomList: {
    width: "30%",
    paddingTop: 22
  },
  symptomListTitle: {
    fontSize: 8.5,
    marginBottom: 4
  },
  symptomBullet: {
    fontSize: 8,
    lineHeight: 1.12
  },
  mutedSmall: {
    color: colors.muted,
    fontSize: 7,
    lineHeight: 1.15
  },
  bodyDiagram: {
    flex: 1,
    alignItems: "center"
  },
  bodyDiagramTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4
  },
  bodyDiagramCaption: {
    width: 160,
    color: colors.muted,
    fontSize: 7,
    textAlign: "center"
  },
  noteBlock: {
    marginBottom: 18
  },
  linkText: {
    color: "#0088c2",
    fontSize: 8,
    fontWeight: "bold"
  },
  overallSummary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  bigMetric: {
    width: 210,
    alignItems: "center",
    marginRight: 24
  },
  bigShieldIcon: {
    width: 52,
    height: 52,
    marginBottom: 6
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center"
  },
  metricValue: {
    color: colors.orange,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center"
  },
  metricHelp: {
    color: colors.muted,
    fontSize: 7,
    lineHeight: 1.15,
    textAlign: "center"
  },
  priorityBreakdown: {
    width: 210,
    borderLeft: `1 solid ${colors.border}`
  },
  priorityRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottom: `1 solid ${colors.border}`,
    padding: "5 0 5 16"
  },
  priorityIcon: {
    width: 28,
    height: 28,
    marginRight: 10
  },
  priorityText: {
    flex: 1
  },
  priorityLabel: {
    color: "#666666",
    fontSize: 8,
    fontWeight: "bold",
    marginBottom: 2
  },
  prioritySubLabel: {
    color: "#999999",
    fontSize: 6.5
  },
  priorityCount: {
    width: 34,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    padding: "4 0",
    borderRadius: 2
  },
  highCount: {
    backgroundColor: "#ffd2d2",
    color: "#7a4c4c"
  },
  mediumCount: {
    backgroundColor: "#ffe8c2",
    color: "#76501e"
  },
  reviewCount: {
    backgroundColor: "#fff2c9",
    color: "#766226"
  },
  psychosocialNote: {
    color: "#7a4090",
    fontSize: 8,
    marginBottom: 8
  },
  infoLine: {
    fontSize: 9,
    marginBottom: 28
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  controlsText: {
    width: "42%",
    marginRight: 24
  },
  hierarchyImage: {
    width: 310,
    height: 205,
    objectFit: "contain"
  },
  noteText: {
    fontSize: 9,
    lineHeight: 1.15,
    marginBottom: 18
  },
  categoryTable: {
    width: 490,
    alignSelf: "center",
    border: `1 solid ${colors.border}`,
    borderRadius: 5
  },
  tableRow: {
    flexDirection: "row",
    minHeight: 38,
    borderBottom: `1 solid ${colors.border}`,
    alignItems: "center"
  },
  tableHeader: {
    minHeight: 30,
    backgroundColor: "#fbfbfb"
  },
  tableCell: {
    padding: "7 8",
    fontSize: 7.2,
    borderRight: `1 solid ${colors.border}`
  },
  categoryNameCell: {
    width: 170
  },
  scoreCell: {
    width: 58,
    textAlign: "center"
  },
  statusCell: {
    width: 150,
    textAlign: "center"
  },
  priorityCell: {
    width: 112,
    borderRightWidth: 0,
    alignItems: "center"
  },
  tableCategoryName: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold"
  },
  tableIcon: {
    width: 22,
    height: 22,
    marginRight: 12
  },
  tableScore: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: "bold"
  },
  tableStatus: {
    color: colors.muted
  },
  priorityPill: {
    width: 62,
    borderRadius: 2,
    padding: "4 0",
    textAlign: "center",
    fontSize: 7,
    fontWeight: "bold"
  },
  highPill: {
    backgroundColor: "#ffd7d7",
    color: "#8a3030"
  },
  mediumPill: {
    backgroundColor: "#ffe3bd",
    color: "#80501b"
  },
  reviewPill: {
    backgroundColor: "#fff0bf",
    color: "#735d19"
  },
  lowPill: {
    backgroundColor: colors.green,
    color: "#4c8849"
  },
  tableFootnote: {
    width: 490,
    alignSelf: "center",
    fontSize: 6.5,
    marginTop: 6
  },
  categoryDetailGrid: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  categoryMetricPanel: {
    width: 170,
    alignItems: "center",
    paddingTop: 10,
    marginRight: 16
  },
  categoryScoreValue: {
    color: colors.amber,
    fontSize: 34
  },
  tipsPanel: {
    flex: 1,
    paddingLeft: 18
  },
  detailLabel: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 5
  },
  tipText: {
    fontSize: 9,
    lineHeight: 1.35,
    marginBottom: 6
  },
  driverBox: {
    borderTop: `1 solid ${colors.border}`,
    borderBottom: `1 solid ${colors.border}`,
    padding: "8 0",
    margin: "8 0 14"
  },
  driverText: {
    color: "#444444",
    fontSize: 8,
    lineHeight: 1.2,
    marginBottom: 3
  },
  answerRecord: {
    borderBottom: `1 solid ${colors.border}`,
    paddingBottom: 7,
    marginBottom: 7
  },
  answerQuestion: {
    fontSize: 8.5,
    fontWeight: "bold",
    lineHeight: 1.2,
    marginBottom: 3
  },
  answerText: {
    fontSize: 7.5,
    lineHeight: 1.2,
    color: "#333333",
    marginBottom: 2
  },
  pageNumber: {
    position: "absolute",
    bottom: 22,
    right: 42,
    color: colors.muted,
    fontSize: 7
  }
});
