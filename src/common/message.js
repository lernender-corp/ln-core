import * as Library from '../library/index';
import * as Constant from '../constant';
import { Simple } from './simple';
/**
 * Class: Message
 */
export class Message extends Simple {
  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.event = Library.init(options, 'event', Constant.EventType.Undefined);
    this.context = Library.init(
      options,
      'context',
      Constant.ContextType.Undefined
    );
    this.content = Library.init(options, 'content');
    this.action = Library.init(options, 'action');
    this.status = Library.init(options, 'status');
    this.label = Library.init(options, 'label');
    this.type = Library.init(options, 'type');
    this.read = Library.init(options, 'read', false);
  }
}
