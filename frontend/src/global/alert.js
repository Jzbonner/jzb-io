/*TODO: update the alert functionality to link to your Github account 
        and have a cooler design
  TODO: add a small personal logo to this component         
*/

import Container from './container';
import cn from 'classnames';
import { Inbox, Clipboard, AtSign, Compass } from 'react-feather';

export default function Alert({ preview }) {
  return (
    <div
      className={cn('text-white', {
        'border-b bg-accent-7 border-accent-7': preview,
        'bg-gradient-to-b from-backdrop to-accent': !preview,
      })}
    >
      <Container>
        <div class="py-2 text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              <div class="flex">
                <Inbox
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
                <Clipboard
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
                <AtSign
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
                <Compass
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
