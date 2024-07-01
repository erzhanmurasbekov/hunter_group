import { useState } from "react";

import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div
      className="xl:h-full xl:py-36 flex w-[350px] mx-auto items-center"
      id="contactus">
      <div className="container mx-auto">
        <div className="flex justify-center custom-height  pb-20 flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[] pt-36 md:pt-8 flex-col lg:text-left mb-4 xl:mb-0">
            <h1 className="text-3xl text-gray-600 font-semibold mb-8 mx-auto">
              Напишите Нам
            </h1>
            <form
              method="post"
              className="flex-1 flex flex-col gap-4 md:gap-6 w-full mx-auto border-gray-600"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}>
              <div className="flex flex-col xl:flex-row gap-4 md:gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 rounded-md outline-none "
                  name="name_from"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 rounded-md "
                  name="email_from"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Number"
                  className="border-2 rounded-md"
                  name="number_from"
                  required
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border-2 rounded-md"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Message"
                className="border-2 rounded-md h-[200px]"
                name="message"
                value={message}></textarea>
              <button
                disabled={sent}
                onClick={(e) => {}}
                className={` w-[200px] font-semibold mx-auto h-11 ${
                  sent ? "bg-gray-700" : "bg-neutralDGrey"
                } text-white rounded-lg border border-white/50 px-8 transition-all duration-300 flex justify-center items-center overflow-hidden group`}>
                <span
                  className={`${
                    sent
                      ? ""
                      : "translate-x-3.5 group-hover:-translate-y-[80%] group-hover:opacity-0 transition-all duration-500"
                  }`}>
                  {sent ? "Отправлено" : "Отправить"}
                </span>
                {!sent && (
                  <BsArrowRight className="-translate-x-10 -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[22px]" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
