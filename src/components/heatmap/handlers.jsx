export const handlers = {
  handleColor: value => {
    if (!value) {
      return 'color-empty';
    } else if (value.count > 0 && value.count < 10) {
      return `color-scale-1`;  
    } else if (value.count >= 10 && value.count < 20) {
      return `color-scale-2`;  
    } else if (value.count >= 20 && value.count < 30) {
      return `color-scale-3`;  
    } else if (value.count >= 30) {
      return `color-scale-4`;  
    }
  }
}