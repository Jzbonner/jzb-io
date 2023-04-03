/*TODO: update the alert functionality to link to your Github account 
        and have a cooler design
  TODO: add a small personal logo to this component         
*/

import Container from './container';
import cn from 'classnames';
import { Inbox } from 'react-feather';
import { GIT_PROFILE } from '../../lib/constants';

export default function Alert({ preview }) {
  return (
    <div
      className={cn('text-white', {
        'border-b bg-accent-7 border-accent-7': preview,
        'bg-gradient-to-b from-backdrop to-accent': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-sm">
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
              <div className="flex">
                <Inbox class="rounded-full border-2 border-accent" size={20} />
                <p class="text-sm text-primary tracking-tighter font-semibold ml-2">
                  jarrett.bonner@gmail.com
                </p>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
