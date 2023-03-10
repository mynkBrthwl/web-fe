import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { SERVICE_ID, FORM_TEMPLATE_ID, PUBLIC_KEY } from '../constants';

const Apply = () => {
    const form = useRef();

    const defaultValues = {
        name: '',
        gender: '',
        dob: '',
        address: '',
        mobile: '',
        mobile2: '',
        email: '',
        qualification: '',
        course: '',
        message: '',
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('required').matches(/^[a-zA-Z\s]+$/, 'Invalid Name'),
        gender: yup.string().required('required'),
        dob: yup.string().required('required'),
        address: yup.string().required('required').min('10', 'Address must be of atleast 10 characters'),
        mobile: yup.string().required('required').matches(/^[0-9]{10}$/, 'Invalid mobile number'),
        email: yup.string().required('required').email('Invalid email'),
        qualification: yup.string().required('required'),
        course: yup.string().required('required'),
    });

    const sendEmail = (values, actions) => {
        emailjs.sendForm(SERVICE_ID, FORM_TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert("Application submitted successfully");
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong.");
        });
        form.current.reset();
    };

  return (
    <section className="bg-white dark:bg-gray-900 rounded mt-14">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
            <p className="mb-8 lg:mb-16 text-center text-gray-500 font-bold dark:text-gray-400 sm:text-xl">APPLICATION</p>
            <Formik initialValues={defaultValues} validationSchema={validationSchema} onSubmit={sendEmail}> 
                <Form ref={form} className="font-poppins">
                    <div className='flex flex-wrap -mx-3 mb-3'>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="name" className="block mb-0 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Full Name
                                    <p className='text-[#ff0000] justify-end'>
                                        <ErrorMessage name='name'/>
                                    </p>
                                </div> 
                            </label>
                            <Field type="text" id="name" name='name' className='block w-full p-2.5 bg-gray-50 border shadow-sm text-gray-900 text-sm rounded-lg border-gray-300  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' placeholder="Enter your name" />
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="gender" className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Gender
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='gender'/>
                                    </p>
                                </div>
                            </label>
                            <Field component='select' name="gender" id="gender" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'>
                                <option value="" disabled>--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Field>
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="dob" className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Date of Birth
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='dob'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="date" id="dob" name='dob' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="YYYY-MM-DD" />
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="address" className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Address
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='address'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="text" id="address" name='address' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your address" />
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="mobile" className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Mobile Number
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='mobile'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="tel" id="mobile" name='mobile' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your mobile number"  />
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="email" className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Email
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='email'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="text" id="email" name='email' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email address"  />
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="qualification" className="block mt-2 text-sm font-medium text-gray-900 first-letter:dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Qualification
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='qualification'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="text" id="qualification" name='qualification' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your Qualification"  />
                        </div>
                        <div className='w-full px-3 mb-4 md:mb-0'>
                            <label htmlFor="course" className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Applying For
                                    <p className='text-[#ff0000]'>
                                        <ErrorMessage name='course'/>
                                    </p>
                                </div>
                            </label>
                            <Field component='select' name="course" id="course" className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'>
                                <option value="" disabled>--</option>
                                <option value="NAT">NAT</option>
                                <option value="JLPT">JLPT</option>
                                <option value="TOP-J">TOP-J</option>
                                <option value="Japanese">Japanese</option>
                            </Field>
                        </div>
                    </div>
                    <div className="sm:col-span-2 mb-2">
                        <label htmlFor="message" className="block font-poppins mt-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <Field as='textarea' id="message" name='message' rows="6" className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Additional Information or Query"/>
                    </div>
                    <div className='flex flex-1 items-center justify-center'>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">APPLY NOW</button>
                    </div>
                </Form>
            </Formik>
        </div>
    </section>
  );
}

export default Apply