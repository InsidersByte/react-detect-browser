// @flow

import { type Node } from 'react';
import { detect } from 'detect-browser';
import type { BrowserName, OS } from './types';

const browser = detect();

type Props = {
  children: ({
    browser: ?{ name: BrowserName | 'node', version: string, os: ?OS },
  }) => Node,
};

const MarkdownRenderer = ({ children }: Props): Node => children({ browser });

export default MarkdownRenderer;
