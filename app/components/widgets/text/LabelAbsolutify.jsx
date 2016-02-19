import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Absolutify} from '../../support/Absolutify';
import Label from './Label';

export default Absolutify(Selectable(Measurable(Label)));
