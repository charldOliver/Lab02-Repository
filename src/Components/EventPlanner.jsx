import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
             
            {/* Section for describing the purpose or overview of the app*/}
            <section  className='description'>
                {/* Brief introduction or maketing message */}
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birtdays to corporate meetings, we've got you covered.
                </p>
                {/* Primary call-to-action button */}
                <button className="get-started-button">Get Started</button>
            </section>

            {/* Section for list or categorize different types of event */}
            
            <section className='event-categories'>
                {/* Social Events Types */}
                <div className='category'>
                <h2>Social Events:</h2>
                <ul>                  
                    <li>Birthday parties</li>
                    <li>Anniversary Celebrations</li>
                    <li>Wedding</li>
                    <li>Baby shower</li>
                    <li>Graduation parties</li>
                    <li>Family Reunions</li>
                </ul>
                </div>

                {/* Entertainment base Event Types */}
                <div className='category'>    
                <h2>Entertainment Events:</h2>          
                    <ul>                              
                    <li>Concerts</li>
                    <li>Music Festival</li>
                    <li>Film Screenings</li>
                    <li>Comedy Show</li>
                    <li>Art Exhibitions</li>
                    <li>Cultural Events</li>                    
                    </ul>
                </div>

                {/* Community-Focused Event types */}
                <div className='category'> 
                    <h2>Community Events:</h2>  
                    <ul>                                    
                    <li>Fundraising Events</li>
                    <li>Charity Galas</li>
                    <li>Volunteer Drives</li>
                    <li>Neighborhood Block Parties</li>
                    <li>Community Festival</li>
                    <li>Cultural Celebrations</li>                                          
                    </ul>
                </div>

            </section>

            {/* Section to highlight app features or functionalities */}
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Easy Event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list Management</li>
                    <li>Real Time Collaboration</li>
                    <li>Reminders and Notifications</li>
                </ul>
            </section>

            {/* Section to showcase user reviews or testimonials*/}
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breez. Highly Recommended!"</p>
                    <p className="author">-Emily Johnson</p>
                </div>
                {/* Additional testimonials can be added here */}
                <div className="testimonial">
                    <p>I use Event Planner for all my corporate events. It saves me so much time and effort!</p>
                    <p className="author">-John Smith</p>
                </div>
            </section>

            {/* Section to provide contact information or a contact form */}
            <section className='contact'>
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="email"placeholder='Email'/>
                    <textarea placeholder="Message" id=""></textarea>
                    <button className='Submit-button'>Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;
