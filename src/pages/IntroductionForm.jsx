export default function IntroductionForm() {
  return (
    <>
      <h2>Introduction Form</h2>
      <h3>Please submit the form below.</h3>
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="firstName">First Name *</label>
          <input id="firstName" type="text" defaultValue="Kelechi" />

          <label htmlFor="middleInitial">Middle Name or Initial (Optional)</label>
          <input id="middleInitial" type="text" defaultValue="O" />

          <label htmlFor="lastName">Last Name *</label>
          <input id="lastName" type="text" defaultValue="Otiocha" />

          <label htmlFor="acknowledgement">Acknowledgement Statement *</label>
          <input id="acknowledgement" type="text" defaultValue="I am a student and I have read the guidelines" />

          <label htmlFor="acknowledgeDate">Acknowledgement Date *</label>
          <input id="acknowledgeDate" type="date" defaultValue="2024-01-15" />
        </fieldset>

        <fieldset>
          <legend>Mascot Information</legend>
          <label htmlFor="mascotAdjective">Mascot Adjective *</label>
          <input id="mascotAdjective" type="text" defaultValue="Observant" />

          <label htmlFor="mascotAnimal">Mascot Animal *</label>
          <input id="mascotAnimal" type="text" defaultValue="Kangaroo" />

          <label htmlFor="divider">Divider Symbol *</label>
          <input id="divider" type="text" maxLength={3} defaultValue="★" />
        </fieldset>

        <fieldset>
          <legend>Image Information</legend>
          <label htmlFor="imageFile">Profile Picture</label>
          <input id="imageFile" type="file" />
          <p>Current: itis3135/images/my-photo.jpg</p>

          <label htmlFor="imageCaption">Picture Caption *</label>
          <input id="imageCaption" type="text" defaultValue="Kelechi Otiocha AI Solutions" />
        </fieldset>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  )
}
