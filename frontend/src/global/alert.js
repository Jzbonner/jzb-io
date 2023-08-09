import Container from './container';
import cn from 'classnames';
import {
  ChevronsRight,
  ChevronsLeft,
  ChevronsDown,
  ChevronsUp,
} from 'react-feather';

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
                className="underline transition-colors duration-200 hover:text-cyan"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              <div class="flex">
                <ChevronsDown
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
                <ChevronsLeft
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
                <ChevronsUp
                  class="rounded-full p-1 bg-footer border-2 border-foreground mr-1"
                  size={28}
                  color="#585858"
                />
                <ChevronsRight
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
