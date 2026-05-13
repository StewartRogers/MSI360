export interface ReportGuidance {
  concern: string;
  actions: string[];
  tip?: string;
}

export function reportGuidanceKey(questionId: string, optionId: string, groupId?: string) {
  return groupId ? `${questionId}.${groupId}.${optionId}` : `${questionId}.${optionId}`;
}

const sustainedSitting: ReportGuidance = {
  concern: "The task may include sustained sitting or limited posture change, which can contribute to awkward or static postures.",
  actions: ["Review workstation fit for the worker's height and task.", "Build in regular posture changes or brief movement breaks.", "Keep frequently used tools and materials within easy reach."],
  tip: "Focus on fit, reach distance, and opportunities to vary posture."
};

const sustainedStanding: ReportGuidance = {
  concern: "The task may include prolonged standing or movement, which can increase fatigue and make posture harder to control.",
  actions: ["Look for sit-stand options or task rotation where practical.", "Review floor surface, footwear, and anti-fatigue mat needs.", "Reduce unnecessary walking, carrying, or reaching where possible."],
  tip: "Reduce fatigue first; tired workers are more likely to adopt strained postures."
};

const sharpContact: ReportGuidance = {
  concern: "Leaning or resting on hard or sharp edges can create local pressure on soft tissue.",
  actions: ["Pad or round sharp edges where contact occurs.", "Reposition tools, work surfaces, or materials to avoid leaning.", "Use supports that spread pressure over a larger area."],
  tip: "Find the edge or tool that causes contact before choosing the control."
};

const kneelingContact: ReportGuidance = {
  concern: "Kneeling on hard or rough surfaces can create pressure at the knees and lower legs.",
  actions: ["Raise the work when possible to reduce kneeling.", "Provide kneeling supports or knee protection when floor work cannot be avoided.", "Limit continuous kneeling time through task rotation or pacing."],
  tip: "Engineering changes that raise or reposition the work are usually stronger than relying only on PPE."
};

const gripContact: ReportGuidance = {
  concern: "Tool or object shape can create hand contact stress and make gripping harder.",
  actions: ["Replace or modify handles that are sharp, slippery, too large, or too small.", "Use grips or fixtures that fit the worker and the task.", "Review whether the object can be held with less pinch or contact pressure."],
  tip: "The best control is usually changing the tool or object, not asking the worker to grip harder."
};

const bodyAsTool: ReportGuidance = {
  concern: "Using a body part as a makeshift tool can concentrate force through the hand, knee, shoulder, or other body area.",
  actions: ["Provide a purpose-built tool or fixture for the task.", "Change the work method so the worker does not need to strike, press, or brace with the body.", "Review training only after the right tool or process is available."],
  tip: "A makeshift body-tool technique is usually a sign that the work process needs a better tool."
};

const pushPullSurface: ReportGuidance = {
  concern: "Moving loads over rough, soft, or uneven surfaces can increase the force needed to push or pull.",
  actions: ["Improve the travel path or floor surface where feasible.", "Use wheels, carts, or aids matched to the load and surface.", "Reduce load size or move the material in smaller batches."],
  tip: "Surface condition and wheel choice often drive push/pull force."
};

const mechanicalAid: ReportGuidance = {
  concern: "Moving heavy objects without a suitable mechanical aid can increase force demands.",
  actions: ["Provide or improve mechanical aids such as carts, dollies, hoists, or lift assists.", "Store heavy items at accessible heights to reduce manual handling.", "Reduce load weight before relying on team lifting."],
  tip: "Use mechanical changes before administrative controls whenever practical."
};

const carriedWeight: ReportGuidance = {
  concern: "Picking up, carrying, or supporting heavier tools or objects can increase force requirements.",
  actions: ["Reduce object weight or split loads where possible.", "Bring the object close to the body before lifting or carrying.", "Use lift assists, carts, or fixtures to support heavier items."],
  tip: "Weight matters most when combined with reach, repetition, or awkward posture."
};

const toolStartForce: ReportGuidance = {
  concern: "Tools or equipment that require high start-up force can increase hand, wrist, arm, or leg loading.",
  actions: ["Replace hard-start tools with lower-force alternatives.", "Maintain equipment so controls start smoothly.", "Use handles, pedals, or controls that reduce peak force."],
  tip: "A short high-force action can still matter if it happens repeatedly."
};

const assistance: ReportGuidance = {
  concern: "Limited access to help or mechanical assistance can leave the worker managing heavy push/pull tasks alone.",
  actions: ["Clarify when workers should request assistance.", "Make assistance or mechanical aids available at the point of work.", "Review staffing, scheduling, or layout barriers that prevent help from being used."],
  tip: "A control is only useful if workers can access it when the task happens."
};

const trunkPosture: ReportGuidance = {
  concern: "Frequent trunk bending or leaning can contribute to awkward posture risk.",
  actions: ["Bring the work closer and between knee and shoulder height where possible.", "Use adjustable surfaces, platforms, or fixtures.", "Reduce long reaches and repeated bending through layout changes."],
  tip: "Start with work height and reach distance before coaching posture."
};

const twisting: ReportGuidance = {
  concern: "Twisting the upper body without moving the feet can increase awkward posture demands.",
  actions: ["Arrange materials so workers can face the task.", "Provide enough space to step and turn.", "Use turntables, conveyors, or repositioned storage to reduce twisting."],
  tip: "Layout changes are often more effective than reminding workers not to twist."
};

const handHeight: ReportGuidance = {
  concern: "Working with hands above shoulder height or below knee height can increase awkward posture demands.",
  actions: ["Adjust work height into a comfortable zone where possible.", "Use platforms, lifts, or adjustable fixtures.", "Move frequently handled items to between knee and shoulder height."],
  tip: "The strongest control is changing the work height or storage height."
};

const reaching: ReportGuidance = {
  concern: "Extended reaching can increase load on the shoulders, arms, neck, and back.",
  actions: ["Move tools and materials closer to the worker.", "Use fixtures or slides to bring work into the normal reach zone.", "Reduce object size or weight when reaching cannot be avoided."],
  tip: "Reach risk increases when the object is heavy or handled repeatedly."
};

const outstretchedLoad: ReportGuidance = {
  concern: "Holding a tool or object with the arm outstretched increases shoulder and arm loading.",
  actions: ["Support the tool or object with a fixture, balancer, or work surface.", "Change the task so the worker can keep elbows closer to the body.", "Reduce tool or object weight where possible."],
  tip: "Even moderate weights can become high demand when held away from the body."
};

const headPosture: ReportGuidance = {
  concern: "Sustained head tilt can increase neck posture demands.",
  actions: ["Raise, lower, or angle the work so the head can stay closer to neutral.", "Improve visibility with lighting, magnification, or display placement.", "Reduce the time spent in sustained visual inspection where practical."],
  tip: "Head posture often improves when the visual target is repositioned."
};

const wristFlexion: ReportGuidance = {
  concern: "Repeated or sustained wrist bending can increase awkward posture risk for the hand and forearm.",
  actions: ["Choose tools or input devices that keep the wrist closer to neutral.", "Adjust work height and orientation to reduce wrist bend.", "Use jigs, supports, or handles that allow a straighter wrist."],
  tip: "Neutral wrist posture is easier to maintain when the work angle is right."
};

const wristDeviation: ReportGuidance = {
  concern: "Angling the wrist side to side can increase hand and forearm posture demands.",
  actions: ["Reposition the work or tool so the wrist can stay straighter.", "Use handles or controls that match the direction of force.", "Reduce repeated side-to-side wrist motion where practical."],
  tip: "Tool orientation can be as important as tool weight."
};

const farReach: ReportGuidance = {
  concern: "Objects that cannot be kept close to the body can increase reach and posture demands.",
  actions: ["Bring parts, tools, and containers closer to the worker.", "Use slides, turntables, carts, or fixtures to reduce far reaches.", "Review whether storage or workstation layout is forcing the reach."],
  tip: "Keep heavier or more frequent items closest."
};

const repeatedMotion: ReportGuidance = {
  concern: "Repeating similar movements for long periods can increase MSI risk, especially when combined with force or posture demands.",
  actions: ["Introduce task variation or rotation that uses different movements.", "Automate, fixture, or batch work to reduce repeated cycles.", "Schedule recovery time before fatigue builds."],
  tip: "Rotation works best when the alternate task uses different body areas."
};

const wristRepetition: ReportGuidance = {
  concern: "Repeated wrist bending or angling can increase hand and forearm loading.",
  actions: ["Change tool, mouse, keyboard, or workpiece position to reduce repeated wrist motion.", "Use supports or fixtures to reduce hand movement.", "Review pace and recovery time for repetitive hand tasks."],
  tip: "Combine posture improvements with repetition controls."
};

const forcefulExertion: ReportGuidance = {
  concern: "Forceful muscular exertions repeated over time can increase fatigue and tissue loading.",
  actions: ["Reduce the force required by changing the tool, material, or process.", "Use powered or assisted equipment where practical.", "Break up high-force work with recovery time or lower-demand tasks."],
  tip: "Force and repetition together should be reviewed early."
};

const pinchGrip: ReportGuidance = {
  concern: "Pinch gripping heavier objects can increase demand on the fingers, thumb, hand, and forearm.",
  actions: ["Use handles, fixtures, or containers that allow a power grip.", "Reduce object weight or hold time.", "Avoid slippery or small contact surfaces that force pinch grip."],
  tip: "Converting pinch grip to a power grip can substantially reduce hand demand."
};

const powerGrip: ReportGuidance = {
  concern: "Sustained or repeated power gripping of heavier objects can increase hand and forearm loading.",
  actions: ["Reduce grip force by improving handle shape, friction, or tool balance.", "Use supports or fixtures so the hand does not carry the full load.", "Review task pace and recovery for gripping work."],
  tip: "A better handle can reduce both force and contact stress."
};

const vibration: ReportGuidance = {
  concern: "Using vibrating tools can increase hand, arm, or whole-body exposure depending on the tool and task.",
  actions: ["Choose lower-vibration tools where practical.", "Maintain tools so vibration does not increase over time.", "Limit exposure duration and provide recovery between vibrating-tool tasks."],
  tip: "Tool selection and maintenance should be reviewed before relying on time limits alone."
};

const roughPushPullDuration: ReportGuidance = {
  concern: "Pushing or pulling heavy items over rough or soft surfaces for longer periods can increase force and repetition demands.",
  actions: ["Improve the travel route or surface.", "Use powered or better-matched material handling equipment.", "Reduce trip distance, load size, or frequency."],
  tip: "Route design can reduce both force and repetition."
};

const noise: ReportGuidance = {
  concern: "Distracting noise can interfere with concentration and may contribute to environmental stress during work.",
  actions: ["Identify and reduce controllable noise sources.", "Separate noisy work from focused tasks where possible.", "Review communication and warning-signal needs in noisy areas."],
  tip: "Environmental controls should support both safety and task focus."
};

const glare: ReportGuidance = {
  concern: "Glare can make visual work harder and may lead to awkward head, neck, or eye posture.",
  actions: ["Reposition screens, work surfaces, or the worker relative to light sources.", "Use blinds, shades, filters, or matte surfaces to reduce glare.", "Review lighting levels for the task."],
  tip: "Glare controls often improve both environmental and posture risk."
};

const fineVisual: ReportGuidance = {
  concern: "Difficulty seeing fine details can lead to sustained visual strain and awkward head posture.",
  actions: ["Improve lighting, contrast, magnification, or display size.", "Move fine-detail work to a comfortable viewing distance.", "Reduce sustained inspection time where possible."],
  tip: "Make the work easier to see before asking the worker to change posture."
};

const cold: ReportGuidance = {
  concern: "Cold conditions can increase discomfort and may affect grip, dexterity, and recovery.",
  actions: ["Reduce cold exposure where possible through barriers, heat, or scheduling.", "Provide suitable gloves or clothing without compromising grip or dexterity.", "Plan warm-up or recovery periods for cold tasks."],
  tip: "Cold can interact with forceful or repetitive hand work."
};

const overtime: ReportGuidance = {
  concern: "Overtime can reduce recovery time and may increase fatigue during physically demanding work.",
  actions: ["Review staffing, scheduling, and workload peaks.", "Plan recovery time after high-demand or extended shifts.", "Reduce physical task demands before relying on longer hours."],
  tip: "Work organization can amplify physical risk when recovery is limited."
};

const deadlines: ReportGuidance = {
  concern: "Tight deadlines can increase pace, reduce recovery, and make workers less able to use safe work methods.",
  actions: ["Review whether task pace allows safe methods and recovery.", "Adjust staffing, sequencing, or deadlines for high-demand work.", "Remove barriers that prevent workers from using aids or controls."],
  tip: "Pace and recovery should be reviewed alongside physical hazards."
};

export const reportGuidanceBySelection: Record<string, ReportGuidance> = {
  [reportGuidanceKey("question-6", "mostly_sit")]: sustainedSitting,
  [reportGuidanceKey("question-6", "mostly_stand_move")]: sustainedStanding,
  [reportGuidanceKey("question-11", "30_min_to_1_hour")]: sharpContact,
  [reportGuidanceKey("question-11", "more_than_1_hour")]: sharpContact,
  [reportGuidanceKey("question-12", "30_min_to_1_hour")]: kneelingContact,
  [reportGuidanceKey("question-12", "more_than_1_hour")]: kneelingContact,
  [reportGuidanceKey("question-13", "poor_grip_size")]: gripContact,
  [reportGuidanceKey("question-13", "irregular_unbalanced")]: gripContact,
  [reportGuidanceKey("question-13", "sharp_handholds")]: gripContact,
  [reportGuidanceKey("question-13", "slippery")]: gripContact,
  [reportGuidanceKey("question-14", "less_than_one_hour")]: bodyAsTool,
  [reportGuidanceKey("question-14", "more_than_one_hour")]: bodyAsTool,
  [reportGuidanceKey("question-15", "smooth")]: pushPullSurface,
  [reportGuidanceKey("question-15", "soft")]: pushPullSurface,
  [reportGuidanceKey("question-15", "rough")]: pushPullSurface,
  [reportGuidanceKey("question-16", "most")]: mechanicalAid,
  [reportGuidanceKey("question-16", "some")]: mechanicalAid,
  [reportGuidanceKey("question-17", "5_to_18_lb")]: carriedWeight,
  [reportGuidanceKey("question-17", "more_than_18_lb")]: carriedWeight,
  [reportGuidanceKey("question-18", "regularly")]: toolStartForce,
  [reportGuidanceKey("question-18", "occasionally")]: toolStartForce,
  [reportGuidanceKey("question-19", "some_extent")]: assistance,
  [reportGuidanceKey("question-19", "do_not_ask")]: assistance,
  [reportGuidanceKey("question-19", "ask_but_no_assistance")]: assistance,
  [reportGuidanceKey("question-20", "most", "forward_backward")]: trunkPosture,
  [reportGuidanceKey("question-20", "some", "forward_backward")]: trunkPosture,
  [reportGuidanceKey("question-20", "most", "sideways")]: trunkPosture,
  [reportGuidanceKey("question-20", "some", "sideways")]: trunkPosture,
  [reportGuidanceKey("question-21", "often")]: twisting,
  [reportGuidanceKey("question-21", "sometimes")]: twisting,
  [reportGuidanceKey("question-22", "most", "hands_above_shoulders")]: handHeight,
  [reportGuidanceKey("question-22", "some", "hands_above_shoulders")]: handHeight,
  [reportGuidanceKey("question-22", "most", "hands_floor_to_knee")]: handHeight,
  [reportGuidanceKey("question-22", "some", "hands_floor_to_knee")]: handHeight,
  [reportGuidanceKey("question-23", "frequently")]: reaching,
  [reportGuidanceKey("question-23", "sometimes")]: reaching,
  [reportGuidanceKey("question-24", "less_than_5_lb")]: outstretchedLoad,
  [reportGuidanceKey("question-24", "5_to_10_lb")]: outstretchedLoad,
  [reportGuidanceKey("question-24", "more_than_10_lb")]: outstretchedLoad,
  [reportGuidanceKey("question-25", "slight_tilt")]: headPosture,
  [reportGuidanceKey("question-25", "deep_tilt")]: headPosture,
  [reportGuidanceKey("question-26", "15_to_30")]: wristFlexion,
  [reportGuidanceKey("question-26", "more_than_30")]: wristFlexion,
  [reportGuidanceKey("question-27", "10_to_20")]: wristDeviation,
  [reportGuidanceKey("question-27", "more_than_20")]: wristDeviation,
  [reportGuidanceKey("question-28", "sometimes")]: farReach,
  [reportGuidanceKey("question-28", "never")]: farReach,
  [reportGuidanceKey("question-29", "2_to_4_hours")]: repeatedMotion,
  [reportGuidanceKey("question-29", "more_than_4_hours")]: repeatedMotion,
  [reportGuidanceKey("question-30", "1_to_2_hours")]: wristRepetition,
  [reportGuidanceKey("question-30", "more_than_2_hours")]: wristRepetition,
  [reportGuidanceKey("question-31", "1_to_2_hours")]: wristRepetition,
  [reportGuidanceKey("question-31", "more_than_2_hours")]: wristRepetition,
  [reportGuidanceKey("question-32", "30_min_to_2_5_hours")]: forcefulExertion,
  [reportGuidanceKey("question-32", "2_5_to_5_5_hours")]: forcefulExertion,
  [reportGuidanceKey("question-32", "more_than_5_5_hours")]: forcefulExertion,
  [reportGuidanceKey("question-33", "less_than_2_hours")]: pinchGrip,
  [reportGuidanceKey("question-33", "more_than_2_hours")]: pinchGrip,
  [reportGuidanceKey("question-34", "less_than_2_hours")]: powerGrip,
  [reportGuidanceKey("question-34", "more_than_2_hours")]: powerGrip,
  [reportGuidanceKey("question-35", "less_than_1_hour")]: vibration,
  [reportGuidanceKey("question-35", "1_to_4_hours")]: vibration,
  [reportGuidanceKey("question-35", "more_than_4_hours")]: vibration,
  [reportGuidanceKey("question-36", "5_min_to_1_hour")]: roughPushPullDuration,
  [reportGuidanceKey("question-36", "more_than_1_hour")]: roughPushPullDuration,
  [reportGuidanceKey("question-37", "frequently")]: noise,
  [reportGuidanceKey("question-37", "sometimes")]: noise,
  [reportGuidanceKey("question-38", "frequently")]: glare,
  [reportGuidanceKey("question-38", "sometimes")]: glare,
  [reportGuidanceKey("question-39", "frequently")]: fineVisual,
  [reportGuidanceKey("question-39", "rarely")]: fineVisual,
  [reportGuidanceKey("question-39", "never")]: fineVisual,
  [reportGuidanceKey("question-40", "yes")]: cold,
  [reportGuidanceKey("question-41", "frequently")]: overtime,
  [reportGuidanceKey("question-41", "sometimes")]: overtime,
  [reportGuidanceKey("question-42", "frequently")]: deadlines,
  [reportGuidanceKey("question-42", "sometimes")]: deadlines
};
