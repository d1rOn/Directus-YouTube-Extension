# Custom Directus Bundle: YouTube Video Preview

This bundle enhances your Directus project by allowing users to input a YouTube URL and displaying the video's thumbnail along with its title.

## Features

- Retrieves the title and thumbnail from a YouTube video URL.
- Built with Vue.js for dynamic data handling.
- Displays error messages for invalid or inaccessible URLs.
- Customizable UI for seamless integration into your project.

## Prerequisites

- Directus 9.x.x or newer.
- Vue.js configured in your Directus project.

## Installation

**Download and Place the Bundle**
- Download and place the `directus-extension-youtube` folder in the `extensions` directory of your Directus installation.

## Usage

### YouTube Video URL Input Interface

Allows users to input a YouTube URL and updates the video preview dynamically.

- **Props**: `value` - The YouTube video URL.
- **Emits**: `input` - Updates the parent component with the user's input.

### YouTube Video Preview Display

Shows the video's thumbnail and title based on the URL provided through the interface component.

## Customization

The bundle includes scoped CSS for component styling, which can be customized to fit your project's aesthetics.

## Error Handling

Provides user feedback for invalid URLs or when video information cannot be fetched.

## Simplifying Your Directus Project

By integrating this bundle, you enhance your Directus project's functionality, enabling users to visually embed and preview YouTube content directly within the CMS.
