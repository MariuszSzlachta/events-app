import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { PATH } from "Common/Urls";
import { MessageProvider } from "Common/Containers/messageProvider/MessageProvider";
import { Router } from "Pages";
import "./styles/index.scss";

const App = () => (
    <MessageProvider>
        {(messages, locale) => (
            <IntlProvider messages={messages} locale={locale}>
                <BrowserRouter>
                    <Route path={PATH.HOME}>
                        <Router />
                    </Route>
                </BrowserRouter>
            </IntlProvider>
        )}
    </MessageProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
