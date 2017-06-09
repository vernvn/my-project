

export function readFileAsDataURL(file) {
  return new Promise<any>((resolve) => {
    if (/\.(xlsx)$/i.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        resolve(this.result);
      }, false);

      return reader.readAsDataURL(file);
    }
    resolve(null);
  });
}



