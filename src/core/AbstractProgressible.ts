export type ActionStatus = 'pending' | 'inprogress' | 'completed';

export interface ProgressOverview {
  pending: number;
  inprogress: number;
  completed: number;
}

export type ProgressibleListener = (
  key: string,
  status: ActionStatus,
  overview: ProgressOverview
) => void;

abstract class AbstractProgressible {
  private actions = new Map<string, ActionStatus>();

  private listener: ProgressibleListener | undefined;

  public setListener(listener: ProgressibleListener) {
    this.listener = listener;
  }

  protected defineActions(keys: string[]) {
    const { inprogress } = this.getProgressOverview();

    if (inprogress === 0) {
      this.actions.clear();

      keys.forEach((key) => {
        this.actions.set(key, 'pending');
      });
    }
  }

  protected setActionInProgress(key: string) {
    if (this.actions.get(key)) {
      this.actions.set(key, 'inprogress');
      this.notifyListener(key, 'inprogress');
    }
  }

  protected setActionCompleted(key: string) {
    if (this.actions.get(key)) {
      this.actions.set(key, 'completed');
      this.notifyListener(key, 'completed');
    }
  }

  private notifyListener(key: string, status: ActionStatus) {
    this.listener?.(key, status, this.getProgressOverview());
  }

  private getProgressOverview(): ProgressOverview {
    const actionsObj = Object.fromEntries(this.actions);

    const result: ProgressOverview = {
      pending: 0,
      inprogress: 0,
      completed: 0,
    };

    for (const key in actionsObj) {
      switch (actionsObj[key]) {
        case 'pending':
          result.pending += 1;
          break;
        case 'inprogress':
          result.inprogress += 1;
          break;
        case 'completed':
          result.completed += 1;
      }
    }

    return result;
  }
}

export default AbstractProgressible;
