# React Boilerplate

Personal React boilerplate codes.

## List of Contents

### Modal Management

All of the modals are managed by a controller, which stores a stack of opened modal information.  
If any component wants to open a modal, they just pass the information of the modal to the controller.  
I implemented two versions of the management system, which are:  

1. useContext version
    - DIR: /src/modal/context_ver/  
    - ModalController is passed through the components using useContext (see ModalProvider.tsx)
    - opening/closing modal is done by executing push()/pop() method of the ModalController
    - example code in ModalWithContext.tsx

2. zustand version (src/modal/store_ver)
    - DIR: /src/modal/store_ver/
    - ModalStore replaces ModalController and useContext related codes of the above version
    - opening/closing modal is done by executing push()/pop() method of the ModalStore
    - example code in ModalWithStore.tsx

### Form

A form example implemented using 'react-hook-form' library.    
Tried to mimic a sign up form.    
DIR: /src/form/


## Contact
Seungwan Cho  
swcho8220@gmail.com  
