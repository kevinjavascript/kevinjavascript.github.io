/**
 * Image Zoom Modal Functionality
 * Adds click-to-zoom functionality for images
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create modal HTML structure
  const modalHTML = `
    <div id="imageModal" class="image-modal" style="display: none;">
      <div class="image-modal-overlay">
        <div class="image-modal-content">
          <span class="image-modal-close">&times;</span>
          <img id="modalImage" src="" alt="Zoomed image">
          <div id="modalCaption" class="image-modal-caption"></div>
        </div>
      </div>
    </div>
  `;

  // Add modal to document
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Add CSS styles
  const styles = `
    <style>
    .image-modal {
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.9);
      animation: fadeIn 0.3s ease;
    }

    .image-modal-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 20px;
    }

    .image-modal-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
      animation: zoomIn 0.3s ease;
    }

    .image-modal img {
      width: 100%;
      height: auto;
      max-height: 80vh;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .image-modal-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      font-size: 35px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      z-index: 10000;
      transition: opacity 0.3s ease;
    }

    .image-modal-close:hover {
      opacity: 0.7;
    }

    .image-modal-caption {
      color: white;
      text-align: center;
      padding: 15px 0;
      font-size: 16px;
      background: rgba(0,0,0,0.5);
      border-radius: 0 0 10px 10px;
      margin-top: -5px;
    }

    .zoomable-image {
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .zoomable-image:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes zoomIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .image-modal-close {
        top: -35px;
        font-size: 30px;
      }

      .image-modal-content {
        max-width: 95%;
        max-height: 95%;
      }

      .image-modal img {
        max-height: 70vh;
      }
    }
    </style>
  `;

  document.head.insertAdjacentHTML('beforeend', styles);

  // Get modal elements
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.image-modal-close');

  // Function to make images zoomable
  function makeImagesZoomable() {
    // Select images that should be zoomable (excluding small icons and profile pictures)
    const images = document.querySelectorAll('img:not(.no-zoom):not([style*="max-height: 150px"]):not([style*="max-height: 120px"]):not([style*="max-height: 100px"]):not([style*="max-height: 80px"])');

    images.forEach(img => {
      // Skip if already processed
      if (img.classList.contains('zoomable-processed')) return;

      // Add zoomable class and styling
      img.classList.add('zoomable-image', 'zoomable-processed');

      // Add click event listener
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalImg.alt = this.alt || 'Zoomed image';

        // Set caption from alt text or nearby text
        let caption = this.alt;
        if (!caption) {
          const nextElement = this.nextElementSibling;
          if (nextElement && (nextElement.tagName === 'P' || nextElement.classList.contains('text-center'))) {
            caption = nextElement.textContent.trim();
          }
        }
        modalCaption.textContent = caption || '';

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // Close modal function
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Event listeners for closing modal
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.classList.contains('image-modal-overlay')) {
      closeModal();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });

  // Initialize zoomable images
  makeImagesZoomable();

  // Re-initialize when new content is loaded (for dynamic content)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        setTimeout(makeImagesZoomable, 100);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});