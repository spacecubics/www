+++
sort_by = "date"
+++

{% section_title(bg="", title="RECRUIT", subtitle="Employment information", slogan="", style_top="Job Details") %}
<!--display element -->
{% end %}

{% twocol(
  bg="earth.jpg",
  title="",
  subtitle="",
  slogan="",
  img="",
  alt="",
  link="",
  link_text="",
  img_link=""
) %}
<!-- no text -->
{% end %}

{% recruit_intro(
  title = "We are always looking for new members to join our team. <br><br> If you are interested, please contact us using the application form.",
  body_text = "
 Space Cubics, Inc. was founded by engineers who met while working in various space tech fields. We genuinely enjoy engineering computers that can be used in the harsh, extreme environment of space.
<br><br>
 Some of us are experts in spacecraft, others in computer circuits, and still others in software development — but we are all skilled at what we do. Some engineering problems require teamwork, making every day a group effort. We don't observe a traditional top-down management structure because we are all unique individuals who achieve more when working together.
 <br><br>
Space Cubics is young and still growing. If you are interested in the astrocomputer industry, please reach out to us. But if you don't work well in a positive, collaborate environment, then this may not be the best place for you."
) %}
<!-- no text -->
{% end %}

{% jobs_list(
  title = "WANTED",
  subtitle = "Currently available",
  slogan = "POSITIONS",
  jobs_note = "Special notes: For positions other than those currently being recruited, please inquire via the inquiry form.",
  jobs = "
System Engineer | system-engineer/ | active
Communications Engineer |
Fundraising Manager |
FPGA Engineer |
Hardware Engineer |
Promotion Engineer |
Sales |
Structural Engineer |
Thermal Engineer |
") %}
<!-- no text -->
{% end %}



{% application_form(
  title = "APPLICATION FORM",
  subtitle = "Join us",
  slogan = "SPACE CUBICS",
  name_field="Name"
  email_field="Email adress"
  role_field="Desired position"
  message_field="Please enter your message here"
  button_label="Send"
  description = ""
) %}
<!-- no text -->
{% end %}

{% prefooter(
  left_card_image="white_pcb_dark.jpg", 
  right_card_image="about.jpg",

  left_title="PRODUCTS",
  left_subtitle="Board introduction",
  left_footer_1="Even in extreme environments,",
  left_footer_2="these computers function normally.",
  left_link="/en/products",

  right_title="ABOUT US",
  right_subtitle="Company details",
  right_footer_1="Aiming for an era where anyone can go to the moon,",
  right_footer_2="we are a JAXA venture developing affordable and reliable computers for space use.",
  right_link="/en/about_us",

  bottom_card_image = "<!--display element -->",
  bottom_title="CONTACT",
  bottom_subtitle="Reach out to us.",
  bottom_footer_1="We welcome inquiries about our business and services.",
  bottom_footer_2="Please feel free to contact us.",
  bottom_link="/en/contact",

  bg=""
) %}
<!--display element -->
{% end %}
