import { verifyAccessTokenHash } from "../../src/algorithm/verifyAccessTokenHash";
import { AccessTokenHashVerificationError } from "../../src/error";

// Example data extracted from https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop-03#section-7.1
describe("The verifyAccessTokenHash function", () => {
  it("Doesn't throw when a correct claim is verified", () => {
    expect(() => {
      verifyAccessTokenHash(
        "Kz~8mXK1EalYznwH-LC-1fBAo.4Ljp~zsPE_NeO.gxU",
        "fUHyO2r2Z3DZ53EsNrWBb0xWXoaNy59IiKCAqksmQEo"
      );
    }).not.toThrow();
  });

  it("Throws when an incorrect access token hash is verified", () => {
    expect(() => {
      verifyAccessTokenHash(
        "Kz~8mXK1EalYznwH-LC-1fBAo.4Ljp~zsPE_NeO.gxU",
        "fUHyO2r2Z3DZ53EsNrWBb0xWXoaNy59IiKCAqksmQEo "
      );
    }).toThrow(AccessTokenHashVerificationError);
  });
});
