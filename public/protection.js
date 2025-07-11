// Website Protection Script
(function() {
    'use strict';
    
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable drag
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        // Ctrl+A (Select All)
        if (e.ctrlKey && e.keyCode === 65) {
            e.preventDefault();
            return false;
        }
        // Ctrl+C (Copy)
        if (e.ctrlKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable image dragging
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
            });
            img.style.userSelect = 'none';
            img.style.webkitUserSelect = 'none';
        });
    });
    
    // Console protection
    if (typeof console !== 'undefined') {
        console.log = console.warn = console.error = function() {};
    }
    
    // Disable print
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Simple image protection
    document.addEventListener('DOMContentLoaded', function() {
        const style = document.createElement('style');
        style.textContent = `
            img { pointer-events: none; }
            * { -webkit-touch-callout: none; }
        `;
        document.head.appendChild(style);
    });
    
    // Blur on focus loss (anti-screenshot)
    window.addEventListener('blur', function() {
        document.body.style.filter = 'blur(5px)';
    });
    
    window.addEventListener('focus', function() {
        document.body.style.filter = 'none';
    });
    
    
    // Enhanced DevTools detection
    let devtoolsOpen = false;
    
    function createOverlay() {
        if (devtoolsOpen) return;
        devtoolsOpen = true;
        
        // Hide original content
        document.body.style.visibility = 'hidden';
        
        // Create strong overlay
        const overlay = document.createElement('div');
        overlay.id = 'protection-overlay';
        overlay.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: #000;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                font-family: Arial, sans-serif;
                z-index: 999999999;
                user-select: none;
                -webkit-user-select: none;
            ">
                ⚠️ غير مسموح بفتح أدوات المطور<br>
                <small style="font-size: 16px; margin-top: 20px;">يرجى إغلاق أدوات المطور وإعادة تحميل الصفحة</small>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    // Multiple detection methods
    setInterval(function() {
        // Method 1: Window size detection
        if (window.outerHeight - window.innerHeight > 160 || 
            window.outerWidth - window.innerWidth > 160) {
            createOverlay();
        }
        
        // Method 2: Console detection
        let start = performance.now();
        console.log('%c', 'color: transparent');
        if (performance.now() - start > 100) {
            createOverlay();
        }
    }, 1000);
    
    // Method 3: Debugger detection
    setInterval(function() {
        try {
            debugger;
            createOverlay();
        } catch(e) {}
    }, 2000);
    
    // Disable common shortcuts
    document.addEventListener('keydown', function(e) {
        // Prevent Ctrl+P (Print)
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            return false;
        }
        // Prevent Ctrl+Shift+C (Inspect)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });
    
})();