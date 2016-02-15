import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';
import TextInput from './TextInput';


export default Draggable(Selectable(Measurable(TextInput)));
