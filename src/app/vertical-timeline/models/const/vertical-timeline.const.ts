import { ICONS } from "../../../icon/models/icon.const";
import { IVerticalTimelineItem } from "../interfaces/vertical-timeline.interface";

export const VERTICAL_TIMELINE_MOCKS :Array<IVerticalTimelineItem>= [
    {
      title: '01.</br>Assessment Phase',
      description:
        ' Our initial phase focuses on understanding your business needs and objectives. We work closely with you to define goals, assess business challenges, and develop a comprehensive strategy that achieves your business goals. This foundation ensures all subsequent phases are tailored to your specific requirements. ',
      icon: ICONS.list,
    },
    {
      title: '02.</br>Planning & Design Phase',
      description:
        'Based on the assessment, a detailed plan is created. This includes put the suitable architect and setting up the project timeline. This comprehensive approach ensures a smooth transition for your business systems. ',
      icon: ICONS.arrowPath,
    },
    {
      title: '03.</br>Implementation Phase',
      description:
        'The execution phase is where strategy becomes reality, this phase involves the technical team to implement the solution. It includes setup, testing, and deploying the application. Continuous feedback and iterations are crucial during this phase to ensure the solution meets your needs.',
      icon: ICONS.operation,
    },
    {
      title: '04.</br>Operation & Management Phase',
      description:
        'The final phase establishes ongoing support and management of your IT systems. We provide ITIL-based NOC & SOC services, implement advanced security measures, and maintain 24/7 monitoring. Our focus is on continuous optimization to keep your systems running at peak efficiency.',
      icon: ICONS.operation,
    },
  ];