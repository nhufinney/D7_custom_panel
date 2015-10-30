<?php

$plugin = array (
  'single' => TRUE,  // Just do this one, it is needed.
  'title' => t('Create Bass Ads Custom Panel'),  // Title to show up on the pane screen.
  'description' => t('Description of the pane screen'), // Description to show up on the pane screen.
  'category' => t('Create Bass Ads Panel'), // A category to put this under.
  'edit form' => 'bass_panel_pane_custom_pane_edit_form', // A function that will return the settings form for the pane.
  'render callback' => 'bass_panel_pane_custom_pane_render', // A function that will return the renderable content.
  'admin info' => 'bass_panel_pane_custom_pane_admin_info', // A function that will return the information displayed on the admin screen (optional).
  'defaults' => array( // Array of defaults for the settings form.
  'dimensions' => '',
  ),
  'all contexts' => TRUE, // This is NEEDED to be able to use substitution strings in your pane.
);

/**
* An edit form for the pane's settings.
*/
function bass_panel_pane_custom_pane_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $dimensions = array(
    '1' => '300 x 68',
    '2' => '300 x 250',
    '3' => '728 x 90',
    '4' => '924 x 50',
  );

  $form['dimensions'] = array(
    '#title' => t('Ads panel pane dimensions'),
    '#description' => t('Please choose one of dimensions below'),
    '#type' => 'select',
    '#options' => $dimensions,
    '#default_value' => $conf['dimensions'],
  );

  return $form;
}

/**
* Submit function, note anything in the formstate[conf] automatically gets saved
* Notice, the magic that automatically does that for you.
*/
function bass_panel_pane_custom_pane_edit_form_submit(&$form, &$form_state) {
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    if (isset($form_state['values'][$key])) {
      $form_state['conf'][$key] = $form_state['values'][$key];
    }
  }
}

/**
* Run-time rendering of the body of the block (content type)
* See ctools_plugin_examples for more advanced info
*/
function bass_panel_pane_custom_pane_render($subtype, $conf, $args, $contexts) {

  // Update the strings to allow contexts.
  if (!empty($contexts)) {
    $content = ctools_context_keyword_substitute($conf['dimensions'], array(), $contexts);
  }

  $block = new stdClass();

  // initial content is blank
  $block->title = t('This is the panel you choose!'); // This will be overridden by the user within the panel options.

  $content = "<div class = 'ad_panel' data-dimension= '" . $conf['dimensions'] .  "'></div>";
  drupal_add_js(drupal_get_path('module', 'bass_panel').'/js/bass_panel.js');
  $block->content = $content;

  return $block;
}

/**
* 'admin info' callback for panel pane.
*/
function bass_panel_pane_custom_pane_admin_info($subtype, $conf, $contexts) {
  if (!empty($conf)) {
    $block = new stdClass;
    $block->title = $conf['override_title'] ? $conf['override_title_text'] : '';
    $block->content = $conf['dimensions'];
    return $block;
  }
}
