# 🚀 Portfolio Content Guide

This guide explains how you can easily add new projects, photos, and videos to your portfolio section.

## 1. Where to add your files
All your images and videos should be placed in the `public/images` folder:
- **Location**: `c:\Users\PC\.gemini\antigravity\scratch\portfolio\public\images`
- Put your `.jpg`, `.png`, or `.svg` files here.
- If you have a video, you can put the video file here OR use an external link (like YouTube or Google Drive).

## 2. How to update the code
The project information is stored in the `src/components/Projects.tsx` file.

### Adding a New Project
1. Open [Projects.tsx](file:///c:/Users/PC/.gemini/antigravity/scratch/portfolio/src/components/Projects.tsx).
2. Find the `projects` array at the top.
3. Copy one of the project objects (everything between `{` and `}`) and paste it into the list.
4. Update the fields:
   - `id`: Give it a unique number (e.g., "5").
   - `title`: The name of your project.
   - `description`: A short summary.
   - `detailedDescription`: The long explanation seen inside the modal.
   - `image`: Path to your main thumbnail (e.g., `"/images/your_new_image.png"`).
   - `liveUrl`: Put your project link here, or use `"#"` if you don't have one yet.

### Adding Photos/Videos to the Gallery
Inside each project object, you'll see a `gallery` list. Add new items like this:

- **For Photos**:
  ```javascript
  { type: "image", url: "/images/your_photo.jpg", title: "My Success Story" }
  ```

- **For Videos**:
  ```javascript
  { 
    type: "video", 
    url: "https://your-video-link.com", 
    title: "Project Reel", 
    thumbnail: "/images/video_preview.jpg" 
  }
  ```

## 💡 Pro Tips
- **Vibrant Gradients**: Each project has a `gradient` field. You can change the colors to make each card look unique!
- **Emojis**: Use the `emoji` field to add a fun icon that shows up when an image is still loading.
- **Auto-Scrolling**: If you don't provide a `liveUrl` (by using `"#"`), the "View Pictures & Videos" button will automatically scroll down to your gallery inside the modal!
