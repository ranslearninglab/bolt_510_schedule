import {
  Sparkles,
  Lightbulb,
  Wrench,
  Users,
  Monitor,
  Gamepad2,
  type LucideIcon,
} from 'lucide-react';

export type ItemType = 'reading' | 'discussion' | 'task' | 'assignment';

export interface SyllabusItem {
  label: string;
  type: ItemType;
  description?: string;
}

export interface Module {
  id: number;
  title: string;
  weeks: string;
  icon: LucideIcon;
  items: SyllabusItem[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Introduction',
    weeks: 'Week 1',
    icon: Sparkles,
    items: [
      { label: 'Introduction: Media Education for the 21st Century', type: 'reading' },
      { label: "Let's get to know each other Digital Story", type: 'assignment' },
    ],
  },
  {
    id: 2,
    title: 'Designing Educational Futures, Now',
    weeks: 'Week 2',
    icon: Lightbulb,
    items: [
      { label: 'Design Primer', type: 'reading' },
      { label: 'Designing Social Futures Now', type: 'reading' },
      { label: 'The Teacher as Designer', type: 'reading' },
      { label: 'KeyWord Discussions (Post and Responses)', type: 'discussion' },
    ],
  },
  {
    id: 3,
    title: 'Designs for Thinking, Designs for Making',
    weeks: 'Weeks 3-5',
    icon: Wrench,
    items: [
      { label: 'Situating Design', type: 'reading' },
      { label: 'Instructionism, Constructivism, and Constructionism', type: 'reading' },
      { label: 'Culture in Design and Designs for Participatory Competencies', type: 'reading' },
      { label: 'Playing with Design (due end of Week 5)', type: 'assignment' },
      { label: 'Keyword Discussion (Post and Responses)', type: 'discussion' },
    ],
  },
  {
    id: 4,
    title: 'Inclusion by Design',
    weeks: 'Weeks 6-7',
    icon: Users,
    items: [
      { label: 'Digital Spaces & The Construction of Race', type: 'reading' },
      { label: 'Designing for Diverse Populations', type: 'reading' },
      { label: 'Gender, Difference, and Networked Media', type: 'reading' },
      { label: 'Keyword Discussion (Post and Responses)', type: 'discussion' },
      { label: 'Design Project Phase 1 - Proposal (due end of Week 7)', type: 'assignment' },
      { label: 'Design Project Phase 1 - Peer Feedback (due end of Week 7)', type: 'assignment' },
    ],
  },
  {
    id: 5,
    title: 'Designs for e-Learning Environments',
    weeks: 'Weeks 8-10',
    icon: Monitor,
    items: [
      { label: 'E-Learning Environments: Intentional Designs', type: 'reading' },
      { label: 'Theory of Online Learning', type: 'reading' },
      { label: 'Transformational Learning Experiences: Transforming Practice', type: 'reading' },
      { label: 'Flexible Learning: Redesigning Learning Spaces', type: 'reading' },
      { label: 'Using Learning Technologies to Improve Assessment', type: 'reading' },
      { label: 'KeyWord Discussions (Post and Responses)', type: 'discussion' },
      { label: 'Design Project Phase 2 - Curriculum User Guide Draft (due end of Week 9)', type: 'assignment' },
    ],
  },
  {
    id: 6,
    title: 'Designs for Serious Play',
    weeks: 'Weeks 11-13',
    icon: Gamepad2,
    items: [
      { label: 'Digital Natives and Networked Publics', type: 'reading' },
      { label: 'Playing to Learn', type: 'reading' },
      { label: 'Designs for Serious Play', type: 'reading' },
      { label: 'KeyWord Discussions (Post and Responses)', type: 'discussion' },
      { label: 'Design Project Phase 2 - Group Feedback for Curriculum User Guide Draft (due end of Week 11)', type: 'assignment' },
      { label: 'Design Project Phase 3 - Final Product (due end of Week 13)', type: 'assignment' },
      { label: 'Design Project Phase 3 - Final Peer Reflection (due end of Week 13)', type: 'assignment' },
      { label: 'Final Keyword Reflection (due end of Week 13)', type: 'discussion' },
      { label: 'Comment on Design Projects', type: 'task' },
    ],
  },
];
