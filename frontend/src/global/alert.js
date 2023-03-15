/*TODO: update the alert functionality to link to your Github account 
        and have a cooler design
  TODO: add a small personal logo to this component         
*/

import Container from './container';
import cn from 'classnames';
import { GitHub, Twitter, Linkedin } from 'react-feather';
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
                <p className="font-semibold text-primary bg-secondary rounded-md mt-1 p-1 ml-1">
                  connect with me{' '}
                </p>
                <a
                  href={`https://github.com/${GIT_PROFILE}`}
                  className="underline hover:text-accent duration-200 transition-colors"
                >
                  <GitHub
                    className="bg-secondary rounded ml-2 mt-1 p-1"
                    size={28}
                  />
                </a>
                <a
                  href={`https://github.com/${GIT_PROFILE}`}
                  className="underline hover:text-accent duration-200 transition-colors"
                >
                  <Twitter
                    className="bg-secondary rounded ml-2 mt-1 p-1"
                    size={28}
                  />
                </a>
                <a
                  href={`https://github.com/${GIT_PROFILE}`}
                  className="underline hover:text-accent duration-200 transition-colors"
                >
                  <Linkedin
                    className="bg-secondary rounded ml-2 mt-1 p-1"
                    size={28}
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
