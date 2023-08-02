import { format } from 'date-fns';

export default function DateComponent({ dateString }) {
  return (
    <time dateTime={dateString} class="p-2 underline underline-offset-4">
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  );
}
