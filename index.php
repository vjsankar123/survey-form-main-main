<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GTS Feedback-Form</title>
    <link rel="icon" type="image/png" href="EVVI_Icon.png">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <!-- <section>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
    </section> -->
    <div class="loading-container">
        <div class="loading-content">
            <div class="loading-animation">
                <div class="loading-spinner"></div>
                <div class="text">
                    Powered by <br><img src="Evvi_new.png" alt="Evvi Logo" /><br>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <!-- Slide 1 -->
        <div class="slide" id="slide1">
            <img src="Evvi_new.png" alt="evvi-icon" class="icon">
            <p class="para">Thank you for participating in our training session!
                Your feedback helps us improve and provide youwith an even better experience.
                Please take a moment to share your thoughts.</p>
            <button class="btns">START</button>
        </div>


        <!-- Slide 2 -->
        <div id="scroll">
            <div class="slide" id="slide2">
                <form action="" method="POST">
                    <h2>Participant Information</h2>
                    <div class="field">
                        <div class="fail">Full Name:</div>
                        <input type="text" id="fullName" name="full_name" required><br>
                    </div>
                    <!-- Slide 3 -->
                    <div class="" id="slide3">
                        <div class="field">
                            <div class="fail">Age Group:</div>
                            <input type="range" id="customRange" min="0" max="4" step="1" value="0"
                                oninput="updateValue(this.value)" name="fun-meter">
                            <div class="range-labels">
                                <div id="label-0" class="range-label active"><span class="emoji"
                                        id="emoji-0">👶</span><span>Under
                                        18</span></div>
                                <div id="label-1" class="range-label"><span class="emoji"
                                        id="emoji-1">🎓</span><span>18-24</span>
                                </div>
                                <div id="label-2" class="range-label"><span class="emoji"
                                        id="emoji-2">💼</span><span>25-34</span>
                                </div>
                                <div id="label-3" class="range-label"><span class="emoji"
                                        id="emoji-3">🏆</span><span>35-44</span>
                                </div>
                                <div id="label-4" class="range-label"><span class="emoji" id="emoji-4">🎉</span><span>45
                                        above</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 4 (Current Status) -->
                    <div class="" id="slide4">
                        <div class="field">
                            <div class="fail">Current Status:</div>
                            <label class="custom-checkbox">
                                <input type="radio" name="option" value="1" onclick="toggleOtherField(false)">
                                <span class="checkmark">
                                    <i class="fas fa-check"></i> <!-- Font Awesome tick icon -->
                                </span>
                                <span>Student</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="radio" name="option" value="2" onclick="toggleOtherField(false)">
                                <span class="checkmark">
                                    <i class="fas fa-check"></i> <!-- Font Awesome tick icon -->
                                </span>
                                <span>Professional</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="radio" name="option" value="3" onclick="toggleOtherField(true)">
                                <span class="checkmark">
                                    <i class="fas fa-check"></i> <!-- Font Awesome tick icon -->
                                </span>
                                <span>Other</span>
                            </label>
                            <div id="otherTextField" class="other-text-field" style="display: none;">
                                <label for="other_status" class="others">Please specify:</label>
                                <input type="text" id="other_status" name="other_status">
                            </div>
                        </div>
                    </div>
                    <!-- Slide 5 (Location) -->
                    <div class="" id="slide5">
                        <div class="field">
                            <div class="fail">Location:</div>
                            <div class="class">
                                Country:
                                <select name="state" id="countySel" size="1">
                                    <option value="" selected="selected">Select Country</option>
                                </select><br><br>
                                State:
                                <select name="countrya" id="stateSel" size="1">
                                    <option value="" selected="selected">Please select Country</option>
                                </select><br><br>
                                City:
                                <select name="district" id="districtSel" size="1">
                                    <option value="" selected="selected">Please select State</option>
                                </select><br><br>
                            </div>
                        </div>
                        <div class="navigation-buttons">
                            <button class="btns">PREV</button>
                            <button class="btns">NEXT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- <div class="slide" id="slide6">
            <div class="popup-content">
                <h2>Thank you for your information. Please provide your feedback for the following question.</h2>
                <button class="btns">START</button>
            </div>
        </div> -->

        <!-- Slide 7 -->
        <div class="slide" id="slide7">

            <h2 class="head">1. Was the session lively and engaging to you?</h2>

            <div class="emoji-labels">
                <div class="emoji-wrapper">
                    <span class="emoji-label" data-value="1" onclick="updateSlider(1)">😴</span>
                    <div class="emoji-value" id="emoji-value-1">Not Lively</div>
                </div>
                <div class="emoji-wrapper">
                    <span class="emoji-label" data-value="2" onclick="updateSlider(2)">😑</span>
                    <div class="emoji-value" id="emoji-value-2">Bit Dull</div>
                </div>
                <div class="emoji-wrapper">
                    <span class="emoji-label" data-value="3" onclick="updateSlider(3)">🙂</span>
                    <div class="emoji-value" id="emoji-value-3">Somewhat Engaging</div>
                </div>
                <div class="emoji-wrapper">
                    <span class="emoji-label" data-value="4" onclick="updateSlider(4)">😃</span>
                    <div class="emoji-value" id="emoji-value-4">Very Engaging</div>
                </div>
                <div class="emoji-wrapper">
                    <span class="emoji-label" data-value="5" onclick="updateSlider(5)">🎉</span>
                    <div class="emoji-value" id="emoji-value-5">Highly Engaging </div>
                </div>
            </div>

            <!-- Hidden input to store linear scale value -->
            <input type="hidden" id="fun-meter-value" name="fun-meter-value" value="">
            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>

        <!-- Slide 8 -->
        <div class="slide" id="slide8">
            <h2 class="head">2. Was the information shared in the session clear and relatable to you?</h2>

            <div class="emoji-labels">
                <div class="emoji-label">
                    <span class="relatability-label" data-value="1" onclick="updateRelatabilitySlider(1)">🌧️</span>
                    <div class="text-emojis" id="value-1">Not Relatable</div>
                </div>
                <div class="emoji-label">
                    <span class="relatability-label" data-value="2" onclick="updateRelatabilitySlider(2)">🌥️</span>
                    <div class="text-emojis" id="value-2">Somewhat Relatable</div>
                </div>
                <div class="emoji-label">
                    <span class="relatability-label" data-value="3" onclick="updateRelatabilitySlider(3)">⛅</span>
                    <div class="text-emojis" id="value-3">Neutral</div>
                </div>
                <div class="emoji-label">
                    <span class="relatability-label" data-value="4" onclick="updateRelatabilitySlider(4)">🌤️</span>
                    <div class="text-emojis" id="value-4">Relatable</div>
                </div>
                <div class="emoji-label">
                    <span class="relatability-label" data-value="5" onclick="updateRelatabilitySlider(5)">☀️</span>
                    <div class="text-emojis" id="value-5">Highly Relatable</div>
                </div>
            </div>

            <input type="hidden" id="meter-value" name="meter-value" value="">


            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>

        <!-- Slide 9 -->
        <div class="slide" id="slide9">
            <h2 class="head">3. Did you gain useful knowledge that you can use in your studies or work?</h2>
            <input type="range" id="learning-impact" name="learning-impact" min="0" max="100" value="50" step="3"
                class="slidering">
            <div class="emoji-labels">
                <span id="score1">🧠</span>
                <span id="learning-impact-value">moderate</span>
                <span id="score2">💥</span>
            </div>
            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>

        <!-- Slide 10 -->
        <div class="slide" id="slide10">
            <h2 class="head">4. How effective were the trainer’s delivery and interaction?
            </h2>
            <div class="rating">
                <label for="trainer-delivery">Trainer’s Delivery:</label>
                <div id="trainer-delivery" class="stars" name="star-rating">
                    <span class="fa fa-star" data-value="1"></span>
                    <span class="fa fa-star" data-value="2"></span>
                    <span class="fa fa-star" data-value="3"></span>
                    <span class="fa fa-star" data-value="4"></span>
                    <span class="fa fa-star" data-value="5"></span>
                </div>
            </div>
            <div class="fun-o-meter">
                <label for="fun-slider">Engagement Level:</label>
                <div class="slider-container">
                    <input type="range" id="fun-slider" name="emoji-rating" min="1" max="5" value="3" step="1"
                        class="sliders" oninput="updateFunMeter(this.value)">
                    <div class="emoji-labeler">
                        <span class="emoji-label" data-value="1" onclick="showEmojiMeaning(1)">😴</span>
                        <span class="emoji-label" data-value="2" onclick="showEmojiMeaning(2)">😑</span>
                        <span class="emoji-label" data-value="3" onclick="showEmojiMeaning(3)">🙂</span>
                        <span class="emoji-label" data-value="4" onclick="showEmojiMeaning(4)">😃</span>
                        <span class="emoji-label" data-value="5" onclick="showEmojiMeaning(5)">🎉</span>
                    </div>
                </div>
                <div id="emoji-meaning" class="emoji-meaning"></div> <!-- Div to show emoji meaning -->
            </div>
            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>

        <!-- Slide 11 -->
        <div class="slide" id="slide11">
            <h2 class="head">5. How would you rate the overall quality of the session?</h2>
            <input type="range" id="quality" name="quality" min="1" max="5" value="3" oninput="updateQualityEmoji()"
                style="--value:">
            <div class="emoji-labeling">
                <span id="label_called">😟</span>
                <span id="texting">Poor</span>
            </div>
            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>
        <!-- Slide 12 -->

        <div class="slide" id="slide12">
            <h2 class="head">6. Do you have any suggestions for improving our training program? Are there specific areas
                we should
                focus on?</h2>
            <textarea id="testimonial" name="concerns" rows="4" cols="50"
                placeholder="Please share your suggestions for enhancing our training sessions....."></textarea>
            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>

        <!-- Slide 13 -->
        <div class="slide" id="slide13">
            <h2 class="head">7. Testimonial
            </h2>

            <div class="form-group">
                <label for="testimonial">Share your testimonial for the trainer?</label>
                <textarea id="testimonial" name="testimonial" rows="4"
                    placeholder="Your testimonial here..."></textarea>

            </div>

            <div class="navigation-buttons">
                <button class="btns">PREV</button>
                <button class="btns">NEXT</button>
            </div>
        </div>

        <div class="slide" id="slide14">
            <div class="form-group">
                <label>Would you like to receive updates about future training programs and allow us to contact you for
                    further insights or opportunities?</label>

                <label for="contact-consent" class="contribute"> <input type="checkbox" id="contact-consent"
                        name="contact-consent" value="get-more-leads">Yes, I’m interested! Please contact me:</label>


                <div id="contact-details" style="display: none;">
                    <label for="phone-number">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" pattern="^[0-9-+s()]*$">

                    <label for="email-address">Email Address:</label>
                    <input type="email" id="email-address" name="email-address">
                </div>


                <div class="navigation-buttons">
                    <button class="btns">PREV</button>
                    <button class="btns">Submit</button>
                </div>

            </div>
            <!-- Toast Message -->
            <div id="toast" class="toast">Thank youYour feedback is important to us and will help us improve future
                sessions!
            </div>
            </form>
        </div>
    </div>

    <script src="script.js">

    </script>
</body>

</html>