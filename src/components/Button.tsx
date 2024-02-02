// import { ComponentPropsWithoutRef } from 'react';

// type ButtonProps = {
//   el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//   el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// export default function Button(props: AnchorProps | ButtonProps) {
//   if (props.el === 'anchor') {
//     return <a className='button' {...props}></a>;
//   }

//   return (
//     <button className='button' {...props}>
//       Button
//     </button>
//   );
// }

// OTHER APPROACH NOT USING el
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

const isAnchorProps = (
  props: AnchorProps | ButtonProps
  // Type Predicates
): props is AnchorProps => {
  return 'href' in props;
};

export default function Button(props: AnchorProps | ButtonProps) {
  if (isAnchorProps(props)) {
    return <a className='button' {...props}></a>;
  }

  return <button className='button' {...props}></button>;
}
