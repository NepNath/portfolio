document.querySelectorAll('.header-detail-tag').forEach(d =>{
    d.addEventListener('mouseenter', () => d.open = true)
    d.addEventListener('mouseleave', () => d.open = false)
})