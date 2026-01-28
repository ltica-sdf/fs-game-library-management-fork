import { useId } from "react";
import AvatarUpload from "./AvatarUpload";
import "./ProfilePage.css";

export type ProfilePageProps = {
    // Name is not editable
    name: string;

    // Display name is editable, and planning use this
    displayName: string;
    setDisplayName: (value: string) => void;

    // Bio is editable
    bio: string;
    setBio: (value: string) => void;

    // Avatar is editable
    avatarUrl: string | null;
    setAvatarUrl: (value: string | null) => void;
};

export default function ProfilePage({
    name,
    displayName,
    setDisplayName,
    bio,
    setBio,
    avatarUrl,
    setAvatarUrl,
}: ProfilePageProps) {
    const uid = useId();
    const displayNameId = `displayName-${uid}`;
    const bioId = `bio-${uid}`;

    const displayNameTooShort =
        displayName.trim().length > 0 && displayName.trim().length < 2;

    return (
        <section className="profile" aria-label="Profile page">
            <header className="profile__header">
                <h2 className="profile__title">Profile</h2>
            </header>

            <div className="profile__grid">
                {/* Left: preview */}
                <div className="profile__card" aria-label="Profile preview">
                    <h3 className="profile__card-title">Preview</h3>

                    <div className="profile__preview">
                        <div className="profile__avatar-box" aria-hidden="true">
                            {avatarUrl ? (
                                <img
                                    className="profile__avatar-img"
                                    src={avatarUrl}
                                    alt="profile__avatar-img"
                                />
                            ) : (
                                <div className="profile__avatar-placeholder">
                                    Null
                                </div>
                            )}
                        </div>

                        <div className="profile__preview-text">
                            <p className="profile__name">
                                <span className="profile__label">Name:</span>{" "}
                                {name}
                            </p>

                            <p className="profile__display-name">
                                <span className="profile__label">
                                    Display name:
                                </span>{" "}
                                {displayName.trim() ? displayName : "—"}
                            </p>

                            <p className="profile__bio">
                                <span className="profile__label">Bio:</span>{" "}
                                {bio.trim() ? bio : "—"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: edit controls */}
                <div className="profile__card" aria-label="Profile editor">
                    <h3 className="profile__card-title">Edit</h3>

                    {/* I.3: avatar add/remove */}
                    <AvatarUpload
                        avatarUrl={avatarUrl}
                        onChangeAvatarUrl={setAvatarUrl}
                    />

                    {/* I.2: form inputs update state in real time */}
                    <form className="profile__form" aria-label="Profile form">
                        <div className="profile__field">
                            <label
                                className="profile__field-label"
                                htmlFor={displayNameId}
                            >
                                Display name
                            </label>
                            <input
                                id={displayNameId}
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder="e.g., Dara"
                            />
                            {displayNameTooShort && (
                                <p className="profile__error" role="alert">
                                    Display name should be at least 2
                                    characters.
                                </p>
                            )}
                        </div>

                        <div className="profile__field">
                            <label
                                className="profile__field-label"
                                htmlFor={bioId}
                            >
                                Bio
                            </label>
                            <textarea
                                id={bioId}
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Write a short bio..."
                                rows={4}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
