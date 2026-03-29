export default function Survey() {
  return (
    <>
      <h2>Outback Customer Survey</h2>
      <p>
        Welcome to the Outback Emporium! We value your feedback about your bushwalking experience at our store.
        Please take a moment to complete this survey.
      </p>
      <form>
        <label htmlFor="name">Your Bush Name:</label>
        <input id="name" name="name" type="text" placeholder="Enter your bush name" />

        <label htmlFor="email">Your Billabong Email:</label>
        <input id="email" name="email" type="email" placeholder="Enter your billabong email" />

        <label htmlFor="number">How many winters have you seen? (optional):</label>
        <input id="number" name="number" type="number" min="13" max="120" placeholder="Enter your age" />

        <label htmlFor="source">How did you hear about our billabong?</label>
        <select id="source" name="source" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="roo-mendation">Roo-mendation</option>
          <option value="bush-telegraph">Bush Telegraph</option>
          <option value="social-didgeridoo">Social Didgeridoo</option>
          <option value="outback-signs">Outback Signs</option>
          <option value="other">Other</option>
        </select>

        <fieldset>
          <legend>How many boomerangs would you give your roo experience?</legend>
          <label>
            <input type="radio" name="satisfaction" value="very-satisfied" />🦘🦘🦘🦘🦘 Five Boomerangs
          </label>
          <label>
            <input type="radio" name="satisfaction" value="satisfied" />🦘🦘🦘🦘 Four Boomerangs
          </label>
          <label>
            <input type="radio" name="satisfaction" value="neutral" />🦘🦘🦘 Three Boomerangs
          </label>
          <label>
            <input type="radio" name="satisfaction" value="dissatisfied" />🦘🦘 Two Boomerangs
          </label>
          <label>
            <input type="radio" name="satisfaction" value="very-dissatisfied" />🦘 One Boomerang
          </label>
        </fieldset>

        <fieldset>
          <legend>What did you spot during your visit? (Select all that apply)</legend>
          <label>
            <input type="checkbox" name="improvements" value="quality" /> Kangaroo Sighting
          </label>
          <label>
            <input type="checkbox" name="improvements" value="support" /> Boomerang Demo
          </label>
          <label>
            <input type="checkbox" name="improvements" value="pricing" /> Vegemite Tasting
          </label>
          <label>
            <input type="checkbox" name="improvements" value="website" /> Koala Encounter
          </label>
          <label>
            <input type="checkbox" name="improvements" value="delivery" /> Platypus Spotting
          </label>
        </fieldset>

        <label htmlFor="comments">Any other bush wisdom to share?</label>
        <textarea id="comments" name="comments" rows="4" placeholder="Share your outback secrets..."></textarea>

        <button type="submit">Share Your Wisdom</button>
      </form>
    </>
  )
}
