import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Absolutify} from '../../support/Absolutify';
import {Resizable} from '../../support/Resizable';
import TextArea from './TextArea';

export default Absolutify(Resizable(Selectable(Measurable(TextArea))));
