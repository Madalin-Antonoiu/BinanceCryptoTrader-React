import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWallet } from "../actions";

const Wallet = ({ wallet, order, fetchWallet }) => {
  useEffect(() => {
    console.log("From Wallet", "Render");
    fetchWallet();
  }, [order.BUY]); // This component will rerender if order store changes <3

  const renderList = () => {
    return wallet.balances.map((acc) => {
      if (acc && acc.free > 0) {
        return (
          <tr key={acc.asset} data-bound={acc.asset}>
            <td data-label="Name">
              <div>
                {/*  These come from iconify*/}
                <span
                  style={{ marginRight: "5px" }}
                  className="iconify"
                  data-icon={`cryptocurrency:${acc.asset.toLowerCase()}`}
                  data-inline="false"
                ></span>
                {acc.asset}
              </div>
            </td>
            <td data-label="Ammount">
              <div>{acc.free}</div>
            </td>
            <td data-label="Locked">
              {acc.locked > 0 ? (
                <div>{parseFloat(acc.locked).toFixed(2)}</div>
              ) : (
                <div>N/A</div>
              )}
            </td>
          </tr>
        );
      }

      return null;
    });
  };

  return (
    <div>
      {/* {console.log(this.props.wallet)} */}
      {wallet.balances ? (
        <table
          className="ui selectable celled table"
          style={{ maxWidth: "300px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Ammount</th>
              <th>Locked</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      ) : (
        <div
          className="ui segment"
          style={{ minHeight: "300px", maxWidth: "265px" }}
        >
          <div className="ui active loader"></div>
          <p></p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { wallet: state.wallet, order: state.order };
};
export default connect(mapStateToProps, { fetchWallet })(Wallet);
