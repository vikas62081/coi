import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, RouteProps } from "react-router-dom";
import { renderHook, RenderHookResult } from "@testing-library/react-hooks/dom";
import configureStore from "redux-mock-store";

export interface OurRenderOptions extends RenderOptions {
  initialState?: any;
  history?: History;
  routeProps?: RouteProps;
}

export const defaultInitialState = {};

function JestAppWrapper({
  initialState = defaultInitialState,
  routeProps = {},
  children,
}: PropsWithChildren<OurRenderOptions>) {
  const mockStore = configureStore([]);
  const store = mockStore(initialState);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route>
          <Route {...routeProps}>{children}</Route>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export const renderWithWrapper = (
  ui: ReactElement,
  {
    initialState,
    history,
    routeProps,
    ...renderOptions
  }: OurRenderOptions = {},
): RenderResult => {
  function Wrapper({ children }: PropsWithChildren<unknown>) {
    return (
      <JestAppWrapper
        initialState={initialState}
        history={history}
        routeProps={routeProps}
      >
        {children}
      </JestAppWrapper>
    );
  }

  const options: RenderOptions = { wrapper: Wrapper, ...renderOptions };
  return { ...render(ui, options) };
};

export const renderHookWithWrapper = <TProps, TResult>(
  hook: (props: any) => TResult,
  {
    initialState,
    history,
    routeProps,
    ...renderOptions
  }: OurRenderOptions = {},
): RenderHookResult<TProps, TResult> => {
  function Wrapper({ children }: PropsWithChildren<unknown>) {
    return (
      <JestAppWrapper
        initialState={initialState}
        history={history}
        routeProps={routeProps}
      >
        {children}
      </JestAppWrapper>
    );
  }

  const options: RenderOptions = { wrapper: Wrapper, ...renderOptions };
  return { ...renderHook(hook, options) };
};

// interface FormProps {
//   initialValues?: any;
// }

// export const FormWrapper: FunctionComponent<FormProps> = ({
//   initialValues = {},
//   children,
// }: PropsWithChildren<FormProps>) => (
//   <Formik
//     initialValues={initialValues}
//     onSubmit={() => {
//       return;
//     }}>
//     {() => <Form>{children}</Form>}
//   </Formik>
// );

// export const getRandomInteger = (min: number, max: number): number => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
