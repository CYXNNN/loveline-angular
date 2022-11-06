import Swal from 'sweetalert2';

export class Toaster {
  toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    iconColor: 'green',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })
}
