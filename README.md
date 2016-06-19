This is a reactjs project, after npm install, to start the app, type:
webpack-dev-server, then open a tab in browser at localhost:8080

1. from version 14 above, this.refs.name.getDOMNode().value is deprecated, use this.refs.name directly

2. From version 14 above, react-dom is not part of react, if we want to use, need to install it separately; and the render() is part of the react-dom

3. We need to import React in index.js, which is needed in other files

import React, {Component} from 'react';
