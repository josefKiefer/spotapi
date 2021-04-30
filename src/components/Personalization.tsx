import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTopPersonalization,
    selectPersonalization,
} from '../slices/personalizationSlice';
import { selectToken } from '../slices/authSlice';
import { Media, PersonalizationTypes, Term } from '../state/appState';

export type TopMediaProps = {
    type: PersonalizationTypes;
};

export default function TopMedia(props: TopMediaProps): JSX.Element {
    const type = props.type;
    const typeAsString = PersonalizationTypes[props.type];
    const media = useSelector(selectPersonalization(type));
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    const [term, setTermState] = useState(Term.medium_term);
    const [termText, setTermTextState] = useState('Medium Term ');
    const [termSubtext, setTermSubtextState] = useState(
        '(approximately last 6 months)'
    );

    const setTerm = (term: string) => {
        switch (term) {
            case '0':
                setTermState(Term.short_term);
                setTermTextState('Short Term ');
                setTermSubtextState('(approximately last 4 weeks)');
                return;
            case '1':
                setTermState(Term.medium_term);
                setTermTextState('Medium Term');
                setTermSubtextState('(approximately last 6 months)');
                return;
            case '2':
                setTermState(Term.long_term);
                setTermTextState('Long Term');
                setTermSubtextState(
                    '(calculated from several years of data and including all new data as it becomes available)'
                );
                return;
        }
    };

    return (
        <div className="text-center mt-2">
            <section
                className="page-section try-it justify-content-center"
                id="try-it"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <table className="col-md-6 col-lg-12 mb-5">
                            <tbody>
                                <tr>
                                    <td>
                                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5 mt-5">
                                            Top {typeAsString}
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    getTopPersonalization({
                                                        token,
                                                        type,
                                                    })
                                                )
                                            }
                                            className="btn btn-primary"
                                        >
                                            Get top {typeAsString}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label
                                            htmlFor="customRange1"
                                            className="form-label mt-2 mb-0"
                                            style={{ color: 'white' }}
                                        >
                                            {termText}
                                        </label>
                                        <p
                                            className="mt-0 mb-0"
                                            style={{
                                                fontSize: 'smaller',
                                                color: '#6c757d',
                                            }}
                                        >
                                            {termSubtext}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="range"
                                            className="form-range mb-2"
                                            id="customRange1"
                                            min="0"
                                            max="2"
                                            step="1"
                                            value={term}
                                            onChange={(event) =>
                                                setTerm(event.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                {media[term].items.map((media: Media) => (
                                    <tr
                                        key={media.name}
                                        style={{
                                            color: 'white',
                                        }}
                                    >
                                        <td>{media.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
