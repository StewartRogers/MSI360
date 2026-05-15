import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import { BodyDiagramSvg } from "./BodyDiagramSvg";
import { reportAssets } from "./reportAssets";
import { AudienceCard, BulletList, MetaItem, NumberedSection, PageNumber, PriorityBreakdown, SymptomList, SymptomsAlert } from "./reportDocumentComponents";
import { priorityPillStyle, priorityPillTextStyle, styles } from "./reportDocumentStyles";
import type { ReportAiGeneratedAnalysis, ReportData } from "./reportData";

/**
 * React PDF document for the generated MSI360 report.
 *
 * The component receives a fully prepared `ReportData` object. Keep scoring,
 * routing, and guidance decisions in `reportData.ts`; this file should remain
 * responsible for layout and visual structure.
 */
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

/**
 * Introductory report section with metadata, privacy note, and user guidance.
 */
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

      <NumberedSection number="5" title="MSI risk factors associated with the physical demands of work activities">
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

/**
 * Overview section with hazard counts, optional AI analysis, symptom summary,
 * and hierarchy-of-controls guidance.
 */
function OverviewContent({ report }: { report: ReportData }) {
  return (
    <View style={styles.pageContent}>
      <View style={{ marginTop: 32 }} />
      <Text style={styles.pageHeading}>Overview of Results</Text>
      <Text style={styles.pageIntro}>This page summarizes reported symptoms, overall MSI risk counts, and practical guidance for reducing risk.{"\n"}The following pages present specific MSI Risk Scores, plain-language explanations, and suggested actions. The full list of questions and answers is provided at the end of the report as a response record.</Text>

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

      <View style={report.aiGeneratedAnalysis ? styles.noteGrid : styles.noteBlock} wrap={false}>
        <View style={report.aiGeneratedAnalysis ? styles.noteGridItem : undefined}>
          <Text style={styles.sectionHeading}>{report.jobSpecificNote.title}</Text>
          <Text style={styles.paragraph}>{report.jobSpecificNote.body}</Text>
          {report.jobSpecificNote.linkLabel && <Text style={styles.linkText}>{report.jobSpecificNote.linkLabel}</Text>}
        </View>
        {report.aiGeneratedAnalysis && <AiGeneratedAnalysisBlock analysis={report.aiGeneratedAnalysis} />}
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

      <View style={styles.controlsRow} wrap={false}>
        <View style={styles.controlsText}>
          <Text style={styles.sectionHeading}>How to approach reducing risks</Text>
          <Text style={styles.paragraph}>
            Risk reduction should begin with the most effective controls first. Where possible, remove or reduce the hazard at the source before relying on administrative controls.
          </Text>
        </View>
        <Image src={reportAssets.images.hierarchyOfControls} style={styles.hierarchyImage} />
      </View>
    </View>
  );
}

/**
 * Category summary table and repeated detail blocks for the five MSI categories.
 */
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
            <Text style={[styles.tableCell, styles.statusCell]}>{category.currentStatus}</Text>
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

/**
 * Appendix listing the English question text and recorded answers.
 */
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

/**
 * Optional AI analysis block for the overview page.
 */
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
