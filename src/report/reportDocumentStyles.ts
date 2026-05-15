import { StyleSheet } from "@react-pdf/renderer";
import type { ReviewPriority } from "./reportData";

/**
 * React PDF style definitions for the MSI360 report document.
 *
 * These styles intentionally stay in TypeScript because `@react-pdf/renderer`
 * consumes style objects rather than browser CSS classes.
 */

/**
 * Shared color palette for the React PDF document.
 *
 * React PDF styles do not consume the app CSS, so report-specific colors are
 * centralized here.
 */
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

/**
 * Selects the background/border style for a category priority pill.
 */
export function priorityPillStyle(priority: ReviewPriority) {
  if (priority === "high") return styles.highPill;
  if (priority === "medium") return styles.mediumPill;
  if (priority === "review") return styles.reviewPill;
  return styles.lowPill;
}

/**
 * Selects the text color style for a category priority pill.
 */
export function priorityPillTextStyle(priority: ReviewPriority) {
  if (priority === "high") return styles.highPillText;
  if (priority === "medium") return styles.mediumPillText;
  if (priority === "review") return styles.reviewPillText;
  return styles.lowPillText;
}

/**
 * Selects the count badge background style for priority summary rows.
 */
export function priorityCountBoxStyle(priority: Exclude<ReviewPriority, "low">) {
  if (priority === "high") return styles.highCountBox;
  if (priority === "medium") return styles.mediumCountBox;
  return styles.reviewCountBox;
}

/**
 * Selects the count badge text style for priority summary rows.
 */
export function priorityCountTextStyle(priority: Exclude<ReviewPriority, "low">) {
  if (priority === "high") return styles.highCountText;
  if (priority === "medium") return styles.mediumCountText;
  return styles.reviewCountText;
}

export const styles = StyleSheet.create({
  page: {
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
