// //====== Event Listeners ======//
// // document.addEventListener('mousemove', (event) => {
// //   // console.log(event);
// //   console.log('Mouse moved!', `position: [${event.clientX}, ${event.clientY}]`);
// // });

// // window.addEventListener('click', function (event) {
// //   console.log('Detected a click!', event.target);
// // });

// const workBtn = document.getElementById('custom-btn');

// workBtn.addEventListener('click', event => {
//   console.log('Work button fired a click event!');
//   console.log(event);
//   // event.stopImmediatePropagation();
// });

// // John
// const submitBtn = document.getElementsByClassName('form-submit')[0];

// console.log(submitBtn);


// submitBtn.addEventListener('click', event => {
//   alert(`Form Submitted`);
// });

// // Blake
// const para = document.querySelector('.content-area');

// para.addEventListener('click', event => {
//   console.log("this is hovering a paragraph");
// });

// // keydown
// const firstNameInput = document.querySelector('.first-name');

// firstNameInput.addEventListener('keydown', (event) => {
//   console.log(`Input detected keypress: ${event.key}`);
// });

// // Adding a keydown event to the window
// // window.addEventListener('keydown', (event) => {
// //   console.log(`Input detected keypress: ${event.key}`);
// // });

// // Emma
// const lastNameInput = document.getElementsByName('lastname')[0];

// lastNameInput.addEventListener('keydown', (event => {
//   console.log(`Input detected keypressed: ${event.key}`);
// }));

// //====== Current Target vs Target ======//
// const siteContainer = document.querySelector('.container');

// siteContainer.addEventListener('click', function(event) {
//   // target is the element directly interacted with (can change)
//   // console.log(`Target: `, event.target);
//   // currentTarget is the element that is listening for the event (doesn’t change)
//   // console.log(`Current Target: `, event.currentTarget);
//   console.log('Click detected in container!');
//   // event.target.style.visibility = 'hidden';
// });






// //====== Event Propagation ======//
// const workList = document.querySelector('.work-list');

// workBtn.addEventListener('click', (event) => {
//   console.log('Work btn 2: list triggered a click event!');
//   console.log('This event will not bubble up!');
//   event.stopPropagation();
// });




// //====== Prevent Default ======//
// const form = document.querySelector('form');

// form.addEventListener('submit', function (event) {
//   console.log('Form: Detected Submit Event!');
//   event.preventDefault();

//   console.log('First Name', event.target[0].value);
//   console.log('Last Name', event.target[1].value);
// });


// // Luis
// const navOne = document.querySelector('a');

// navOne.addEventListener('click', (event) => {
//   event.preventDefault();
// });


// //====== More Event Practice! ======//


// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });
  
//   const link = document.querySelectorAll('.nav-link');
//   link.forEach(element => {
//     element.addEventListener('mouseover', e => {
//       element.style.color = '#FFDAB9';
//     });
//     element.addEventListener('mouseleave', e => {
//       element.style.color = 'black';
//     })
//   });
  
//   const aLinks = document.querySelectorAll('a');
//   aLinks.forEach(element => {
//     element.addEventListener('click', e => {
//       e.preventDefault();
//     })
//   })
  
//   const images = document.querySelectorAll('img');
//   images.forEach(element => {
//     element.addEventListener('dblclick', e => {
//       element.style.border = '5px solid #FFDAB9';
//     })
//     element.addEventListener('click', e => {
//       element.style.border = '5px solid black';
//     })
//   })
  
//   const pElements = document.querySelectorAll('p');
//   pElements.forEach(element => {
//     element.addEventListener('click', e => {
//       element.textContent = 'Hello World!';
//     })
//   })
  
//   const dragElement = document.querySelectorAll('img');
//   dragElement.forEach(element => {
//     element.addEventListener('drag', e => {
//       element.style.opacity = '.5'
//     })
//   })
  
//   const kDown = document.querySelector('body');
//   kDown.addEventListener('keydown', e => {
//     kDown.style.backgroundColor = '#FFDAB9';
//       // e.stopPropagation();
//       const kUp = document.querySelector('body');
//         kUp.addEventListener('keyup', e => {
//         kUp.style.backgroundColor = 'white';
//       })
//   })
  
//   window.addEventListener('resize', event => {
//     const sp = document.querySelector('h2');
//     sp.textContent = 'Bus Fun';
//   })
  
//   const context = document.querySelector('p');
//   context.addEventListener('contextmenu', e => {
//     context.textContent = 'sign up';
//   })
  
//   const containerHome = document.querySelector('.intro p');
//   containerHome.addEventListener('click', e => {
//     containerHome.style.backgroundColor = 'gray';
//     e.stopPropagation();
//     const contentSection = document.querySelector('.content-section');
//       contentSection.addEventListener('click', e => {
//       contentSection.style.backgroundColor = 'black';
//     })
//   })