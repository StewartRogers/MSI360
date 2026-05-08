export const questionIds = {
  role: "question-1",
  timeInRole: "question-2",
  taskDescription: "question-3",
  height: "question-4",
  bodyDiscomfortAreas: "question-10",
  handheldToolContact: "question-13",
  bodyMakeshiftTool: "question-14",
  upperBodyPosture: "question-20",
  headPosition: "question-25"
} as const;

export const onboardingQuestionIds = new Set<string>([questionIds.role, questionIds.timeInRole, questionIds.taskDescription, questionIds.height]);
export const promptUsesSectionTitle = new Set<string>([questionIds.bodyMakeshiftTool, questionIds.handheldToolContact, questionIds.upperBodyPosture, questionIds.headPosition]);

export const standaloneImages: Record<string, string> = {
  // Job context
  "question-5": "/images/indooroutdoor.png",

  // Organizational
  "question-7": "/images/input2.png",
  "question-8": "/images/input2.png",

  // Contact stress
  "question-11": "/images/lean.png",
  "question-12": "/images/kneel.jpg",
  "question-13": "/images/handletool30.jpg",
  "question-14": "/images/makeshift.png",

  // Force
  "question-15": "/images/trolley.jpg",
  "question-16": "/images/dolly.png",
  "question-17": "/images/avg_weight.png",
  "question-18": "/images/thumb.png",
  "question-19": "/images/assist.png",

  // Awkward postures
  "question-20": "/images/neutralleaning.png",
  "question-21": "/images/twisting.png",
  "question-22": "/images/bodyUpdated.png",
  "question-23": "/images/armstretch.jpg",
  "question-24": "/images/armsoutstretched.png",
  "question-25": "/images/headPics.png",
  "question-26": "/images/figure.png",
  "question-27": "/images/hand.png",
  "question-28": "/images/objectClose.png",

  // Repetition
  "question-29": "/images/similar.jpg",
  "question-30": "/images/figure.png",
  "question-31": "/images/morethan15.png",
  "question-32": "/images/muscularforce.jpg",
  "question-33": "/images/pinch2lb.png",
  "question-34": "/images/powerGrip.png",
  "question-35": "/images/hand_body.png",
  "question-36": "/images/surface.png",

  // Environmental
  "question-37": "/images/hearing.jpg",
  "question-38": "/images/sunglare.jpg",
  "question-39": "/images/detail.jpg",
  "question-40": "/images/cold.jpeg"
};

export const groupImages: Record<string, Record<string, string>> = {
  [questionIds.upperBodyPosture]: {
    forward_backward: "/images/lean-forward.png",
    sideways: "/images/lean-sideways.png"
  }
};

export const optionImages: Record<string, Record<string, string>> = {
  [questionIds.headPosition]: {
    neutral: "/images/head-neutral.png",
    slight_tilt: "/images/head-slight-tilt.png",
    deep_tilt: "/images/head-deep-tilt.png"
  }
};
