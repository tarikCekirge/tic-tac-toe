import PropTypes from "prop-types";

const Log = ({ turns }) => {
    return (
        <div className="mt-4 p-3 bg-gray-100 rounded max-w-[400px] mx-auto">
            <h2 className="text-lg font-semibold mb-2 text-center">Game Log</h2>
            <ol className="list-decimal pl-5 space-y-1">
                {turns.length > 0 ? (
                    turns.map((turn) => (
                        <li key={`${turn.square.row}-${turn.square.cell}`} className="text-sm">
                            <span className="font-bold">{turn.player}</span> selected square
                            <span className="text-gray-800 font-semibold"> ({turn.square.row}, {turn.square.cell})</span>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No moves yet.</p>
                )}
            </ol>
        </div>
    );
};

Log.propTypes = {
    turns: PropTypes.arrayOf(
        PropTypes.shape({
            player: PropTypes.string.isRequired,
            square: PropTypes.shape({
                row: PropTypes.number.isRequired,
                cell: PropTypes.number.isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default Log;
