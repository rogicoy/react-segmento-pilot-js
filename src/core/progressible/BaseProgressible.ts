import {
  ProgressibleListener,
  ProgressiveActionStatus,
  ProgressOverview,
} from './types';

/**
 * BaseProgressible is a base class for all classes that have progressible
 * actions.
 */
abstract class BaseProgressible {
  private actions = new Map<string, ProgressiveActionStatus>();

  private listener: ProgressibleListener | undefined;

  public constructor() {
    this.listener = undefined;
  }

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

  protected notifyListener(key: string, status: ProgressiveActionStatus) {
    this.listener?.(key, status, this.getProgressOverview());
  }

  protected getProgressOverview(): ProgressOverview {
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

export default BaseProgressible;
