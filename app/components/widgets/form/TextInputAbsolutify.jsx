import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Absolutify} from '../../support/Absolutify';
import TextInput from './TextInput';


export default Absolutify(Selectable(Measurable(TextInput)));
