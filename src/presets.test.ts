import * as assert from 'node:assert/strict';
import test from 'node:test';
import { TEMPLATE_PRESETS, detectPresetFromTemplate, getPresetTemplate } from './presets';

test('Route Bible preset returns the expected template', () => {
  assert.equal(
    getPresetTemplate('routeBible').replace('{{verse}}', 'John%203%3A16'),
    'https://route.bible/?q=John%203%3A16&utm_source=obsidian_link_to_verse&utm_medium=link',
  );
});

test('Bible Gateway preset remains unchanged', () => {
  assert.equal(
    getPresetTemplate('bibleGateway'),
    'https://www.biblegateway.com/passage/?search={{verse}}&version={{version}}',
  );
});

test('detects Route Bible preset from template value', () => {
  assert.equal(
    detectPresetFromTemplate(TEMPLATE_PRESETS.routeBible.linkTemplate),
    'routeBible',
  );
});
