/**
 * ActionStatus is a type that represents the status of an action.
 */
export type ProgressiveActionStatus = 'pending' | 'inprogress' | 'completed';

/**
 * ProgressOverview contains the number of actions in each status.
 */
export interface ProgressOverview {
  pending: number;
  inprogress: number;
  completed: number;
}

export type ProgressibleListener = (
  key: string,
  status: ProgressiveActionStatus,
  overview: ProgressOverview
) => void;

export interface Progressible {
  setListener: (listener: ProgressibleListener) => void;
}
