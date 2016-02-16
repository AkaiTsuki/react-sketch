import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';
import Title from './Title';

export default Draggable(Selectable(Measurable(Title)));
