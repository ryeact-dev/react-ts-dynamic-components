import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

// Polymorphic Component with Generics
type ContainerProps<T extends ElementType> = {
  //   as: ElementType; // Name of the element
  as?: T;
  children: ReactNode; // JSX component
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
