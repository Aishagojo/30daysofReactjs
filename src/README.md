 # 30daysofreactjs
 # Day 1 /30
# what i have learned day 1 of 30 days of reactjs
1. **JSX Basics**:
   - JSX elements start with capital letters and resemble HTML.
   - JSX elements must return a single element or use fragments to group multiple elements.
   - Self-closing tags in JSX must have a closing slash, for example, `<img />`.

2. **Components and Props**:
   - Components are like JavaScript functions, accepting props (properties) and returning JSX elements.
   - i  created a `Book` component that takes `img`, `author`, and `title` as props.
   - i passed these props when rendering the `Book` components inside the `BookList` component.

3. **Component Nesting**:
   - i nested the `Book` components inside the `BookList` component to organize your UI.

4. **Rendering and Styling**:
   - i used React's `ReactDOM.createRoot` and `render` functions to render your `BookList` component.
   - i applied CSS classes for styling, following the camelCase convention (e.g., `className` instead of `class`).

In summary, what i learned how to create components, pass data to them using props, nest components for structured UI, and render them using React's rendering methods. These concepts are fundamental in React development and are building blocks for more complex applications.